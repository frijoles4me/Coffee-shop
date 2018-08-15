import React from "react";

const Contacts = () => {
  return (
    <div className="container  col-xs-offset-5">
      <dl class="dl-horizontal">
        <dt>Company</dt>
        <dd>Coffee Shop</dd>
        <dt>Address</dt>
        <dd>
          <div>795 Folsom Ave, Suite 600</div>
          <div>San Francisco, CA 94107</div>
        </dd>
        <dt>Phone Number</dt>
        <dd>P: (123) 456-7890</dd>
      </dl>
    </div>
  );
};

export default Contacts;
