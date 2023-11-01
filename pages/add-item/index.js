import { useState } from "react";
import AddItemForm from "@/components/add-item/AddItemForm";
import API from "@/utils/API";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddItem = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAddItem = async (payload) => {
    try {
      setLoading(true);
      const response = await API.post("/items", payload);
      if (response.status == 200) {
        toast.success("Item added!");
        router.push("/shop");
      } else if (data?.message) {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="resContainer">
        <div className="mt-7 mb-12">
          <h1 className="text-xl text-[#333333] font-medium">Add new item</h1>
          <section className="max-w-[456px] mx-auto mt-8">
            <AddItemForm onAddItem={(payload) => handleAddItem(payload)} loading={loading} />
          </section>
        </div>
      </main>
    </>
  );
};

export default AddItem;
