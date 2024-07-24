export default function ReviewDetail({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  return (
    <>
      Review {params.reviewid} for Product {params.productid}
    </>
  );
}
