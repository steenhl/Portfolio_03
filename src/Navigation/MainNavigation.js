import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
	return (
		<nav className="main-nav navbar">
			<div className="container-fluid">
				<button
					className="btn btn-secondary btn-sm bg-transparent"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div className="offcanvas-header">
						<h2 className="offcanvas-title" id="offcanvasNavbarLabel">
							Navigation
						</h2>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" aria-current="page">
									<span className="active" data-bs-target="#navbarNav" data-bs-dismiss="offcanvas" aria-label="Close">
										Home
									</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Gallery" className="nav-link">
									<span data-bs-dismiss="offcanvas" aria-label="Close">
										Gallery
									</span>
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/RM" className="nav-link">
									<span data-bs-target="#navbarNav" data-bs-dismiss="offcanvas" aria-label="Close">
										Rick and Morty
									</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Vote" className="nav-link">
									<span data-bs-dismiss="offcanvas" aria-label="Close">
										Vote
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
