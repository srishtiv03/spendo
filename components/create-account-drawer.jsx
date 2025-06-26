"use client";

import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose 
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { accountSchema } from "@/app/lib/schema";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"; 
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { createAccount } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const CreateAccountDrawer = ({children}) => {
  const [open, setOpen] = useState(false);

const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
  watch,
  reset,
} = useForm({
  resolver: zodResolver(accountSchema),
  defaultValues: {
    name: "",
    type: "CURRENT",
    balance: "",
    isDefault: false,
  },
});

const{data: newAccount,
  error, 
  fn: createAccountFn, 
  loading: CreateAccountLoading
} = useFetch(createAccount);

useEffect(() => {
  if (newAccount && !CreateAccountLoading) {
    toast.success("Account created successfully!");
    reset();
    setOpen(false);
  }
}, [CreateAccountLoading, newAccount]);

useEffect(() => {
  if (error) {
    toast.error(error.message || "An error occurred while creating the account.");
  }
}, [error]);

const onSubmit = async (data) => {
  await createAccountFn(data);
};

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Account</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <form className="p-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">Account Name</label>
              <Input
              id="name" placeholder="Enter account name"
              {...register("name")}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}       
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="text-sm font-medium">Account Type</label>
              <Select onValueChange={(value) => setValue("type", value)}
                defaultValues={watch("type")}> 
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CURRENT">Current</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && <p className="text-red-500">{errors.type.message}</p>}       
            </div>

            <div className="space-y-2">
              <label
                htmlFor="balance"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Initial Balance
              </label>
              <Input
                id="balance"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("balance")}
              />
              {errors.balance && (
                <p className="text-sm text-red-500">{errors.balance.message}</p>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between rounded-md border border-input bg-background px-1 py-1 shadow-sm">
                <div className="space-y-0.5">
                  <label htmlFor="isDefault" className="text-sm font-medium mb-1 block">Set as Default</label>
                  <p className="text-sm text-muted-foreground">
                    This account will be selected by default for transactions
                  </p>
                </div>
                <Switch
                  id="isDefault"
                  onCheckedChange={(checked) => setValue("isDefault", checked)}
                  checked={watch("isDefault")}
                />
              </div>
            </div>

            <div  className="flex gap-2 mt-4">
              <DrawerClose asChild>
                <Button type="button" varinat="outline" className="flex-1">
                  Cancel
                </Button>
              </DrawerClose>

              <Button type="submit" className="flex-1" disabled={CreateAccountLoading}>
                {CreateAccountLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4  animate-spin"/>
                    Creating...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>

            </div>

          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateAccountDrawer;