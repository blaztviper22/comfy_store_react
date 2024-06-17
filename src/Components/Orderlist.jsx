import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Orderlist = () => {
  const {orders, meta} = useLoaderData();

  return (
    <div className="mt-8">
      <div className="mb-4 capitalized">
        total orders: {meta.pagination.total}
        {console.log(meta)}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Product</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              //console.log(order);
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } = order.attributes;
              //console.log(createdAt);
              const date = day(createdAt).format('hh:mm a - MM Do, YYYY');
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className='hidden sm:block'>{date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orderlist
