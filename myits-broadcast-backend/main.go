package main

import (
	"net/http"

	"myits-broadcast-backend/config"
	"myits-broadcast-backend/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDatabase()

	r := gin.Default()

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
