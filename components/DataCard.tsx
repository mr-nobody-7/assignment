"use client";
import { easeIn, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DataCardProps = {
  data: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
};

// const easing = [0.6, -0.05, 0.01, 0.99]

// const fadeInUp = {
//   initial : {
//     y : 10,
//     opacity : 0
//   },
//   animate : {
//     y : 0,
//     opacity :1,
//     transition : {
//       duration : 0.3,
//       ease : easeIn
//     }
//   }
// }

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const DataCard = (data: DataCardProps) => {
  const { id, title, description, date } = data.data;
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card>
        <CardHeader>
          <motion.div>
            <CardTitle>{title}</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div>
            <p>{description}</p>
          </motion.div>
        </CardContent>
        <CardHeader>
          <motion.div>
            <CardDescription>{date}</CardDescription>
          </motion.div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default DataCard;
