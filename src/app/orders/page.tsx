const Orders = () => {
  return (
    <main className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full'>
        <thead>
          <tr className='text-left'>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1237861238721</td>
            <td>19.07.2023</td>
            <td>89.90</td>
            <td>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Orders;
