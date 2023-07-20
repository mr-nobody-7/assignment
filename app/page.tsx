"use client";
import EmployeeTable from "@/components/EmployeeTable";
import HomeHeader from "@/components/HomeHeader";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col w-full p-5 sticky top-12"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HomeHeader />
        <EmployeeTable />
      </motion.div>
    </AnimatePresence>
  );
}
