"use client";

import { motion, useAnimate, stagger } from "framer-motion";
import { useEmployeesStatus } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

type FiltersListType = {
  id: string;
  name: string;
};

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation(isOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

//     animate(
//       "ul",
//       {
//         clipPath: isOpen
//           ? "inset(0% 0% 0% 0% round 10px)"
//           : "inset(10% 50% 90% 50% round 10px)"
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.5
//       }
//     );

//     animate(
//       "li",
//       isOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isOpen ? staggerMenuItems : 0
//       }
//     );
//   }, [isOpen]);

//   return scope;
// }

const HomeHeader = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const scope = useMenuAnimation(isOpen);
  const { setEmployeesStatus, employeesStatus } = useEmployeesStatus();

  const { data: filtersList } = useQuery<FiltersListType[]>({
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:3000/employeeTableFiltersList"
      );
      return data;
    },
    queryKey: ["categories-query", employeesStatus],
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full py-1">
        <p className="text-lg">Employess</p>
        <Select onValueChange={(field) => setEmployeesStatus(field)}>
          <SelectTrigger className="w-[100px] capitalize">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {filtersList?.map((filter) => {
                return (
                  <SelectItem
                    key={filter.id}
                    value={filter.name}
                    className="capitalize"
                  >
                    {filter.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HomeHeader;
