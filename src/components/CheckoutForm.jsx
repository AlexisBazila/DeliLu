import React from 'react';

const CheckoutForm = (handleOrder, buyer) => {
	return (
		<div>
			<h2>CONTACT</h2>
			<form>
				<div>
					<label>Name</label>
					<input
						type="text"
						value={buyer.name}
						name="name"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={buyer.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Phone</label>
					<input
						type="number"
						value={buyer.phone}
						name="phone"
						onChange={handleChange}
					/>
				</div>
			</form>

			<Button onClick={handleOrder}>Buy</Button>
		</div>
	);
};

export default CheckoutForm;
