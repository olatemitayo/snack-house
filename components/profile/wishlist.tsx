// import React from "react";
// import ProfileComp from "./profileComponent";
// import Link from "next/link";
// import Button from "../common/button";

// export default function WishList() {
//   return (
//     <div>
//       <ProfileComp>
//         {Wish.length > 0 ? (
//           <div>
//             <h2 className="text-[32px] mb-[28px]">Wish List</h2>
//             <div className=" flex flex-col gap-6 justify-center items-center">
//               {Wish.map((item: any) => (
//                 <div className="flex justify-between w-full pb-6 border-b border-[#EBDBE0]">
//                   <div className="flex gap-7 items-center">
//                     <figure>
//                       <img src={item.img} alt={item.alt} width={70} />
//                     </figure>
//                     <div>
//                       <h3>{item.name}</h3>
//                       <h3>{item.price}</h3>
//                     </div>
//                   </div>
//                   <div className="grid gap-3">
//                     <Button
//                       text="Buy Now"
//                       className=" px-[24.5px] py-[8.471px] rounded-[4px] w-[150px]  text-[9.035px]"
//                     />
//                     <Button
//                       text="Add to Cart"
//                       className="bg-[#EDD5E7] px-[20.047px] rounded-[4px] w-[150px] py-[8.471px]  whitespace-nowrap text-[9.035px]"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center gap-4">
//             <figure>
//               <img
//                 src="/emptycart.png"
//                 alt="Empty Cart"
//                 className="w-[clamp(150px,14vw,230px)]"
//               />
//             </figure>
//             <div className="text-center grid gap-[clamp(8px,1vw,16px)]">
//               <h3 className="text-[23px] font-bold">
//                 You don’t have any item in your wishlist.
//               </h3>
//               <p>Please explore our catalogues to see our current offers.</p>
//               <Link href={"/products"}>
//                 <Button text="Explore" className="cmd:w-full" />
//               </Link>
//             </div>
//           </div>
//         )}
//       </ProfileComp>
//     </div>
//   );
// }
