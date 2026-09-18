package controllers

import (
	"net/http"
	"time"

	"myits-broadcast-backend/config"
	"myits-broadcast-backend/models"

	"github.com/gin-gonic/gin"
)

type CreateBroadcastInput struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description" binding:"required"`
	Category    string `json:"category" binding:"required"`
	Tags        string `json:"tags"`
	Author      string `json:"author" binding:"required"`
	AuthorEmail string `json:"author_email" binding:"required"`
	CtaType     string `json:"cta_type" binding:"required"`
	CtaUrl      string `json:"cta_url" binding:"required"`
	ExpiryDays  int    `json:"expiry_days" binding:"required"`
}

func GetBroadcasts(c *gin.Context) {
	var broadcasts []models.Broadcast
	config.DB.Order("created_at desc").Find(&broadcasts)
	c.JSON(http.StatusOK, gin.H{"status": "success", "data": broadcasts})
}

func GetBroadcastByID(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")
	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Broadcast tidak ditemukan"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "success", "data": broadcast})
}

func CreateBroadcast(c *gin.Context) {
	var input CreateBroadcastInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	expiryDate := time.Now().AddDate(0, 0, input.ExpiryDays)
	broadcast := models.Broadcast{
		Title:       input.Title,
		Description: input.Description,
		Category:    input.Category,
		Tags:        input.Tags,
		Author:      input.Author,
		AuthorEmail: input.AuthorEmail,
		CtaType:     input.CtaType,
		CtaUrl:      input.CtaUrl,
		Clicks:      0,
		ExpiryDate:  expiryDate,
		Status:      "Aktif",
	}

	config.DB.Create(&broadcast)
	c.JSON(http.StatusCreated, gin.H{"status": "success", "message": "Broadcast berhasil dibuat!", "data": broadcast})
}

func DeleteBroadcast(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")
	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Broadcast tidak ditemukan"})
		return
	}
	config.DB.Delete(&broadcast)
	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Broadcast berhasil dihapus!"})
}

func TrackClick(c *gin.Context) {
	var broadcast models.Broadcast
	id := c.Param("id")
	if err := config.DB.First(&broadcast, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Broadcast tidak ditemukan"})
		return
	}
	config.DB.Model(&broadcast).Update("clicks", broadcast.Clicks+1)
	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Klik berhasil dicatat!", "clicks": broadcast.Clicks + 1})
}
