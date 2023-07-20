"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const loading = () => {
  return (
    <Tabs>
      <TabsList className="w-[300px] mb-3">
        {["1", "2"].map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="w-[150px] capitalize"
          ></TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default loading;
