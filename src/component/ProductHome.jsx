import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { products } from '../Helper';
import { add } from '../redux/CartSlice';
import ProductQuickView from './ProductQuickView ';
export default function ProductHome() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedProduct, setSelectedProduct] = useState(null);
	const [quantity, setQuantity] = useState('1');

	const dispatch = useDispatch();
	const handleOpenModal = (product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
		setQuantity(1);
	};

	const handleQuantityChange = (e) => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value) && value > 0) {
			setQuantity(value);
		}
	};

	const handleAdd = (product) => {
		dispatch(add(product));
	};
	const handleDelete = (id) => {
		dispatch(remove(id));
	};
	const handleAddToCart = () => {
		if (selectedProduct) {
			// Add selectedProduct with the specified quantity to the cart
			handleAdd({ ...selectedProduct, quantity });
			handleCloseModal();
		}
	};
	const handleIncreaseQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecreaseQuantity = () => {
		setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
	};
	return (
		<>
			<ProductQuickView
				selectedProduct={selectedProduct}
				isModalOpen={isModalOpen}
				handleCloseModal={handleCloseModal}
				quantity={quantity}
				handleQuantityChange={handleQuantityChange}
				handleDecreaseQuantity={handleDecreaseQuantity}
				handleIncreaseQuantity={handleIncreaseQuantity}
				handleAddToCart={handleAddToCart}
			/>
			<section className='product-area product-style1-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 m-auto'>
							<div
								className='section-title text-center'
								data-aos='fade-up'
								data-aos-duration='1000'>
								<h2 className='title'>New Products</h2>
								<div className='desc'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod incididunt ut labore et dolore magna aliqua
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='product-tab-content'>
								<ul
									className='nav nav-tabs'
									id='myTab'
									role='tablist'
									data-aos='fade-up'
									data-aos-duration='1000'>
									<li
										className='nav-item'
										role='presentation'>
										<button
											className='nav-link active'
											id='our-features-tab'
											data-bs-toggle='tab'
											data-bs-target='#our-features'
											type='button'
											role='tab'
											aria-controls='our-features'
											aria-selected='true'>
											All Items
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'>
										<button
											className='nav-link'
											id='best-sellers-tab'
											data-bs-toggle='tab'
											data-bs-target='#best-sellers'
											type='button'
											role='tab'
											aria-controls='best-sellers'
											aria-selected='false'>
											Baby Dress
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'>
										<button
											className='nav-link mr-0'
											id='new-items-tab'
											data-bs-toggle='tab'
											data-bs-target='#new-items'
											type='button'
											role='tab'
											aria-controls='new-items'
											aria-selected='false'>
											Baby Toys
										</button>
									</li>
								</ul>

								<div
									className='tab-content'
									id='myTabContent'
									data-aos='fade-up'
									data-aos-duration='1300'>
									<div
										className='tab-pane fade show active'
										id='our-features'
										role='tabpanel'
										aria-labelledby='our-features-tab'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='product'>
													<div className='row'>
														{products.map((product) => (
															<div
																className='col-lg-3 col-md-4 col-sm-6'
																key={product.id}>
																<div className='product-item'>
																	<div className='product-thumb'>
																		<img
																			src={product.image}
																			alt={product.name}
																			height={'200px'}
																		/>
																		<div className='product-action'>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Add to cart'
																				onClick={() => handleAdd(product)}>
																				<i className='ion-ios-cart'></i>
																			</a>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Product details'
																				onClick={() =>
																					handleOpenModal(product)
																				}>
																				<i className='ion-arrow-expand'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-heart'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-shuffle'></i>
																			</a>
																		</div>
																	</div>
																	<div className='product-info'>
																		<div className='rating'>
																			{[...Array(product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star'
																						key={index}></span>
																				)
																			)}
																			{[...Array(5 - product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star-o'
																						key={index}></span>
																				)
																			)}
																		</div>
																		<h4 className='title'>
																			<a>{product.name}</a>
																		</h4>
																		<div className='prices'>
																			<span className='price'>
																				${product.price}
																			</span>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='best-sellers'
										role='tabpanel'
										aria-labelledby='best-sellers-tab'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='product'>
													<div className='row'>
														{products.map((product) => (
															<div
																className='col-lg-3 col-md-4 col-sm-6'
																key={product.id}>
																<div className='product-item'>
																	<div className='product-thumb'>
																		<img
																			src={product.image}
																			alt={product.name}
																			height={'200px'}
																		/>
																		<div className='product-action'>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Add to cart'
																				onClick={() => handleAdd(product)}>
																				<i className='ion-ios-cart'></i>
																			</a>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Product details'
																				onClick={() =>
																					handleOpenModal(product)
																				}>
																				<i className='ion-arrow-expand'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-heart'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-shuffle'></i>
																			</a>
																		</div>
																	</div>
																	<div className='product-info'>
																		<div className='rating'>
																			{[...Array(product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star'
																						key={index}></span>
																				)
																			)}
																			{[...Array(5 - product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star-o'
																						key={index}></span>
																				)
																			)}
																		</div>
																		<h4 className='title'>
																			<a>{product.name}</a>
																		</h4>
																		<div className='prices'>
																			<span className='price'>
																				${product.price}
																			</span>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>

									<div
										className='tab-pane fade'
										id='new-items'
										role='tabpanel'
										aria-labelledby='new-items-tab'>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='product'>
													<div className='row'>
														{products.map((product) => (
															<div
																className='col-lg-3 col-md-4 col-sm-6'
																key={product.id}>
																<div className='product-item'>
																	<div className='product-thumb'>
																		<img
																			src={product.image}
																			alt={product.name}
																			id='homeProductimg'
																			height={'200px'}
																		/>
																		<div className='product-action'>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Add to cart'
																				onClick={() => handleAdd(product)}>
																				<i className='ion-ios-cart'></i>
																			</a>
																			<a
																				className='action-quick-view'
																				data-toggle='tooltip'
																				data-placement='top'
																				title='Product details'
																				onClick={() =>
																					handleOpenModal(product)
																				}>
																				<i className='ion-arrow-expand'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-heart'></i>
																			</a>
																			<a className='action-quick-view'>
																				<i className='ion-shuffle'></i>
																			</a>
																		</div>
																	</div>
																	<div className='product-info'>
																		<div className='rating'>
																			{[...Array(product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star'
																						key={index}></span>
																				)
																			)}
																			{[...Array(5 - product.stars)].map(
																				(star, index) => (
																					<span
																						className='fa fa-star-o'
																						key={index}></span>
																				)
																			)}
																		</div>
																		<h4 className='title'>
																			<a>{product.name}</a>
																		</h4>
																		<div className='prices'>
																			<span className='price'>
																				${product.price}
																			</span>
																		</div>
																	</div>
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
