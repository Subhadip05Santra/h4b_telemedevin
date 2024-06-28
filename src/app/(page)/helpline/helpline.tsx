import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HelplineDetails = () => {
  return (
    <div className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Emergency Helpline Number</CardTitle>
        <CardDescription>+033 2664 0033</CardDescription>
        <br />
        <CardTitle className="text-2xl">Ambulance Helpline Number</CardTitle>
        <CardDescription>+033 2664 0033</CardDescription>
        <br />
        <CardTitle className="text-2xl">Suicide Helpline Number</CardTitle>
        <CardDescription>+033 2664 0033</CardDescription>
        <br />
        <CardTitle className="text-2xl">Customer Service Number</CardTitle>
        <CardDescription>+033 2664 0033</CardDescription>
      </CardHeader>
    </div>
  );
};

export default HelplineDetails;
