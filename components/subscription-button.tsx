"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

function SubscriptionButton({ isPro = false }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING ERROR: ", error);

      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        disabled={loading}
        variant={isPro ? "outline" : "gradient"}
        onClick={handleClick}
      >
        {isPro ? "Manage Subscription" : "Upgrade"}
        {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
      </Button>
    </div>
  );
}

export default SubscriptionButton;
