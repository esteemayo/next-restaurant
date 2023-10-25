const Orders = () => {
  return (
    <main className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>1237861238721</td>
            <td className='py-6 px-1'>19.07.2023</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Orders;
