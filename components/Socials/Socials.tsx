import { SocialIcons } from "@/lib/SocialIcons";

import localText from "./Socials.text.json";

import { Button } from "@/components/ui/button";
import ScheduleCallPopup from "@/components/ScheduleCallPopup/ScheduleCallPopup";
import DialogContactForm from "../DialogContactForm/DialogContactForm";

const Socials = () => {
  const links = localText.socials.links;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ScheduleCallPopup />
      <DialogContactForm />
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
          asChild
        >
          <a href={"/"} target="_blank">
            {localText.socials.resume}
          </a>
        </Button>
        {Object.keys(links).map((key: string, index: number) => {
          const link = links[key as keyof typeof links];
          return (
            <Button
              key={index}
              size="icon"
              variant="outline"
              className="active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
              asChild
            >
              <a href={link} target="_blank">
                {SocialIcons[key as keyof typeof SocialIcons]}
                <span className="sr-only">{`${key} - ${link}`}</span>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
