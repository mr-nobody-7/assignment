"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSection, useSideBarStore } from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

type pagesType = {
  id: string;
  name: string;
};

const SideBar = () => {
  const { section, setSection } = useSection();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { showSideBar, setShowSideBar } = useSideBarStore();
  const { data: queryResults } = useQuery<pagesType[]>({
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/pages");
      return data;
    },
    queryKey: ["pages-query"],
  });

  useEffect(() => {
    const closeSideBar = () => {
      setShowSideBar(false);
    };

    const handleDocumentMouseDown = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSideBar();
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, []);

  // useEffect(() => {
  //   const closeSideBar = () => {
  //     setShowSideBar(false);
  //   };

  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (showSideBar && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
  //       closeSideBar();
  //     }
  //   };

  //   window.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [showSideBar]);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar fixed left-0 top-0 z-50 h-full min-w-[220px] transition-transform ease-in-out duration-500 ${
        showSideBar ? "translate-x-0" : "translate-x-[-220px]"
      } bg-white dark:bg-black `}
    >
      <Tabs defaultValue="home" className="flex flex-col h-full">
        <div className="flex items-center justify-between py-2 px-4">
          <Image src="/logo_light.png" alt="logo" height={45} width={149} />
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <X className="h-[1rem] w-[1rem]" />
          </Button>
        </div>
        <TabsList
          className="w-full h-full flex flex-col justify-start rounded-none pt-4"
          defaultValue={section}
        >
          {queryResults?.map((page) => (
            <Link
              href={page.name === "home" ? "/" : `/${page.name}`}
              className="w-[90%]"
            >
              <TabsTrigger
                className="w-full capitalize"
                value={page.name}
                onClick={() => {
                  setSection(page.id);
                  setShowSideBar(false);
                }}
              >
                {page.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SideBar;
