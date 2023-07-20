"use client";
import DataCard from "@/components/DataCard";
import { TabsContent } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSection } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";

type ContentType = {
  id: string;
  title: string;
  description: string;
  date: string;
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const page = () => {
  const { data: cardsData, isLoading } = useQuery<ContentType[]>({
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/designationData"
        );
        return data
      } catch (error) {
        console.log(error)
      }
    },
    queryKey: ["content-query"],
  });

  const { setSection } = useSection();


  return (
    <TabsContent value="designation">
      <AnimatePresence>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-visible"
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
