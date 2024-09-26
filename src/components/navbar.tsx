"use client"
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
// Mock function to get profile views (replace with actual data fetching)
const profileViews = 123; // Replace this with your actual logic for fetching the profile view count

export default function Navbar() {
  const [profileViews, setProfileViews] = useState(0);

  useEffect(() => {
    // Replace "views" with your actual Firestore document reference
    const viewsRef = doc(db, "profile", "views");

    // Real-time listener for views
    const unsubscribe = onSnapshot(viewsRef, (doc) => {
      if (doc.exists()) {
        console.log("Current profile views count:", doc.data().count); // Log current count
        setProfileViews(doc.data().count); // Assuming "count" field holds view count
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  
  
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Link
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12"
              )}
            >
              <item.icon className="size-4" />
            </Link>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Link
                href={social.url}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12"
                )}
              >
                <social.icon className="size-4" />
              </Link>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "flex items-center space-x-2 py-2 px-3" // Adjusted padding and added vertical padding as well
                )}
              >
                <span className="text-sm font-medium">{profileViews}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile Views</p> {/* Tooltip content displayed on hover */}
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}
