
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
	
	const { images, isLoading } = useFetchGifs(category);

	
	return (
		<>
			<h4>{category}</h4>
			{isLoading && <p>Loading...</p>}

			<div className="card-grid">
		
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
		</>
	);
};
