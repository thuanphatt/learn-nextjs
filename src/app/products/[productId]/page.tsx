export default function ProductDetail({
	params,
}: {
	params: {
		productId: string;
	};
}) {
	return (
		<>
			<h1 className="text-center text-blue-500 font-bold">ProductDetail {params.productId}</h1>
		</>
	);
}
