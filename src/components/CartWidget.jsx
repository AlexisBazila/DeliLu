import '../../style/CartWidget.css';

export const CartWidget = () => {
	return (
		<>
			<button type="button" class="btn btn-primary position-relative">
				<i class="bx bx-cart"></i>
				<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
					5
					<span class="visually-hidden">unread messages</span>
				</span>
			</button>
		</>
	);
};
