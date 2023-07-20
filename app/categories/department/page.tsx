"use client";
import DataCard from "@/components/DataCard";
import { TabsContent } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

type ContentType = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export const page = () => {
  const { data: cardsData, isLoading } = useQuery<ContentType[]>({
    queryFn: async () => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const { data } = await axios.get(
            "http://localhost:3000/departmentData"
          );
          resolve(data);
        });
      });
    },
    queryKey: ["content-query"],
  });

  return (
    <TabsContent value="department">
      <AnimatePresence>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {cardsData?.map((card) => (
            <DataCard key={card.id} data={card} />
          ))}
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  );
};

export default page;
