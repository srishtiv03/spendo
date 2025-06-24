import CreateAccountDrawer from "@/components/create-account-drawer"; 
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

function DashboardPage() {
  return (
    <div className="px-5">
      {/* Budget Progress */}

      {/* Overview  */}

      {/* Accounts Grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CreateAccountDrawer>
          <Card className={"hover:shadow-md transition-shadow cursor-pointer border-dashed border-amber-300"}>
            <CardContent className={"flex flex-col items-center justify-center h-full text-center"}>
              <Plus className="h-6 w-6 text-amber-600" />
              <p className="text-amber-700">Add New Account</p> 
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
  </div>
  );
}

export default DashboardPage;