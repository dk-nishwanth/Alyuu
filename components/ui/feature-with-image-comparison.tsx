import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureProps {
  badge?: string;
  title?: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
}

function Feature({
  badge = "Featured Project",
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  beforeImage = "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
  afterImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!onMouseDown) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = (e as React.MouseEvent).clientX - rect.left;
    }
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="w-full py-12 lg:py-20 scroll-reveal">
      <div className="container mx-auto px-8">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="default">{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular serif">{title}</h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-600">{description}</p>
          </div>
          <div className="pt-8 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onMouseLeave={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-emerald-900/30 h-full w-1 absolute z-20 top-0 -ml-1 select-none transition-all"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-emerald-600 rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center shadow-lg hover:bg-emerald-700 hover:shadow-emerald-600/50"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e as any);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e as any);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none text-white" />
                </button>
              </div>
              <img
                src={beforeImage}
                alt="Before"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border border-emerald-200/50 object-cover"
                style={{
                  clipPath: `inset(0 0 0 ${inset}%)`,
                }}
              />
              <img
                src={afterImage}
                alt="After"
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border border-emerald-200/50 object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">Drag the slider to compare</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
