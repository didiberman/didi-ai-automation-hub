import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

interface Robot {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

const FallingRobots = () => {
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    // Generate 15 robots with random positions and timings
    const newRobots: Robot[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 6,
      size: 20 + Math.random() * 30,
    }));
    setRobots(newRobots);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {robots.map((robot) => (
        <div
          key={robot.id}
          className="absolute -top-20 opacity-20 animate-fall"
          style={{
            left: robot.left,
            animationDelay: `${robot.delay}s`,
            animationDuration: `${robot.duration}s`,
          }}
        >
          <Bot 
            className="text-primary" 
            style={{ width: robot.size, height: robot.size }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingRobots;
