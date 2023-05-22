import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
	const [Categories, setCategories] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball",
	]);

	const handleAddCategory = (newCategory) => {
		if (Categories.includes(newCategory)) return;
		setCategories([newCategory, ...Categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={handleAddCategory} />

			{Categories.map((category) => (
				<GifGrid key={category} category={category } />
			))}

			{/*Imagen de Gif */}
		</>
	);
};
