import { AddressElement } from '@stripe/react-stripe-js';

const AddressForm = () => {
  return (
    <form>
      <h3>Address</h3>
      <AddressElement
        options={{ mode: 'shipping' }}
        onChange={(e) => {
          if (e.complete) {
            const address = e.value.address;
          }
        }}
      />
    </form>
  );
};

export default AddressForm;
