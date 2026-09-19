package main

import (
	"net/http"

	"myits-broadcast-backend/config"
	"myits-broadcast-backend/controllers"
	_ "myits-broadcast-backend/docs" // Auto-generated docs dari swag init

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title myITS Broadcast API
// @version 1.0
// @description API Documentation for myITS Broadcast Fullstack Platform.
// @host localhost:8080
// @BasePath /api
func main() {
	config.ConnectDatabase()

	r := gin.Default()

	// Middleware CORS
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	})

	// Swagger Route UI Endpoint
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Backend myITS Broadcast siap meluncur!"})
	})

	api := r.Group("/api")
	{
		api.GET("/broadcasts", controllers.GetBroadcasts)
		api.GET("/broadcasts/:id", controllers.GetBroadcastByID)
		api.POST("/broadcasts", controllers.CreateBroadcast)
		api.DELETE("/broadcasts/:id", controllers.DeleteBroadcast)
		api.POST("/broadcasts/:id/click", controllers.TrackClick)
	}

	r.Run(":8080")
}
