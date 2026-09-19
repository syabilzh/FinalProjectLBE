package controllers

import (
	"myits-broadcast-backend/config"
	"myits-broadcast-backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetBroadcasts godoc
// @Summary Get all active broadcasts
// @Description Fetch all broadcast records from database
// @Tags Broadcasts
// @Produce json
// @Success 200 {object} map[string]interface{}
// @Router /broadcasts [get]
func GetBroadcasts(c *gin.Context) {
	var broadcasts []models.Broadcast
	config.DB.Find(&broadcasts)

	c.JSON(http.StatusOK, gin.H{"data": broadcasts})
}

// GetBroadcastByID godoc
// @Summary Get broadcast by ID
// @Description Fetch a single broadcast record by its primary key
// @Tags Broadcasts
// @Produce json
// @Param id path int true "Broadcast ID"
// @Success 200 {object} map[string]interface{}
// @Failure 404 {object} map[string]interface{}
// @Router /broadcasts/{id} [get]
func GetBroadcastByID(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")

	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Broadcast tidak ditemukan"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": broadcast})
}

// CreateBroadcast godoc
// @Summary Create a new broadcast
// @Description Create a new broadcast entry in the system
// @Tags Broadcasts
// @Accept json
// @Produce json
// @Param broadcast body models.Broadcast true "Broadcast Data"
// @Success 201 {object} map[string]interface{}
// @Failure 400 {object} map[string]interface{}
// @Router /broadcasts [post]
func CreateBroadcast(c *gin.Context) {
	var input models.Broadcast
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	config.DB.Create(&input)
	c.JSON(http.StatusCreated, gin.H{"data": input})
}

// TrackClick godoc
// @Summary Increment click count
// @Description Increment the CTA click count for a specific broadcast
// @Tags Broadcasts
// @Produce json
// @Param id path int true "Broadcast ID"
// @Success 200 {object} map[string]interface{}
// @Failure 404 {object} map[string]interface{}
// @Router /broadcasts/{id}/click [post]
func TrackClick(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")

	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Broadcast tidak ditemukan"})
		return
	}

	config.DB.Model(&broadcast).Update("clicks", broadcast.Clicks+1)
	c.JSON(http.StatusOK, gin.H{"message": "Click tracked successfully", "clicks": broadcast.Clicks + 1})
}

// DeleteBroadcast godoc
// @Summary Delete broadcast by ID
// @Description Remove a broadcast record from database
// @Tags Broadcasts
// @Produce json
// @Param id path int true "Broadcast ID"
// @Success 200 {object} map[string]interface{}
// @Failure 404 {object} map[string]interface{}
// @Router /broadcasts/{id} [delete]
func DeleteBroadcast(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")

	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Broadcast tidak ditemukan"})
		return
	}

	config.DB.Delete(&broadcast)
	c.JSON(http.StatusOK, gin.H{"message": "Broadcast berhasil dihapus"})
}
