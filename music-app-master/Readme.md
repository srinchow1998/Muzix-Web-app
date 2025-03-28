# Muzix App Case Study

```

# Backend
 1. Creating Authentication API(Generating token using Jwt)
	* User should be able to register in the system. 
	* A registered user should be able to login to the system
	* Models- User.cs
			  AuthDbContext.cs---------SQL

	* Repository -IAuthRepository.cs
				 AuthRepository.cs

	* ServiceLayer -IAuthService.cs
					 AuthService.cs
	
	* Controller -AuthController.cs

 2. Creating Favourite API
	* View all Favorite music cards layout under Favorite section
	* Models -Favorite.cs
			  FavoriteDbContext.cs----------MongoDb

	* Repository-IFavoriteRepository.cs
				FavoriteRepository.cs

	* ServiceLayer -IFavouriteService.cs
					FavouriteService.cs

	* Contoller-FavoriteController.cs

 3. Creating Recommendation API
	* View all music recommendations from 3rd party music service provider (napster api/last.fm) 
	* Models -Recommend.cs

	* Repository-IRecommendRepository.cs
				RecommendRepository.cs

	* Contoller-RecommendController.cs
```