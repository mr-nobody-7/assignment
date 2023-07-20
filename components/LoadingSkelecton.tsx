"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function LoadingSkeleton() {
  return (
    <AnimatePresence>
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
          (each) => (
            <Card key={each}>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-[220px] h-[18px] rounded-sm bg-slate-400 my-1" />
                  <Skeleton className="w-[180px] h-[18px] rounded-sm bg-slate-400 my-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <Skeleton className="w-[220px] h-[14px] rounded-sm bg-slate-400 my-1" />
                  <Skeleton className="w-[200px] h-[14px] rounded-sm bg-slate-400 my-1" />
                  <Skeleton className="w-[220px] h-[14px] rounded-sm bg-slate-400 my-1" />
                  <Skeleton className="w-[180px] h-[14px] rounded-sm bg-slate-400 my-1" />
                  <Skeleton className="w-[200px] h-[14px] rounded-sm bg-slate-400 my-1" />
                </p>
              </CardContent>
              <CardFooter>
                <CardDescription>
                  <Skeleton className="w-[220px] h-[15px] rounded-sm bg-slate-400" />
                </CardDescription>
              </CardFooter>
            </Card>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
}
