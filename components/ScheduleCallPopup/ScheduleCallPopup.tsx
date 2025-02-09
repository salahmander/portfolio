"use client";

import { useEffect } from "react";

import { getCalApi } from "@calcom/embed-react";

import { Button } from "@/components/ui/button";

import { SocialIcons } from "@/lib/SocialIcons";

const ScheduleCallPopup = () => {
  useEffect(() => {
    const initializeCalApi = async () => {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        theme: "light",
        layout: "month_view",
      });
    };
    initializeCalApi();
  }, []);

  return (
    <Button
      data-cal-namespace="meeting"
      data-cal-link="salah-abdo/meeting"
      data-cal-config='{"theme":"light"}'
      className="shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all"
    >
      Schedule a call {SocialIcons["mobile"]}
    </Button>
  );
};

export default ScheduleCallPopup;
