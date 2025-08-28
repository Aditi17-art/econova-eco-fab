import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  onViewMore: () => void;
}

const ProductCard = ({ image, title, onViewMore }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-brand-grey">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-brand-grey-dark mb-3">{title}</h3>

        <Button variant="cta-outline" className="w-full" onClick={onViewMore}>
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
