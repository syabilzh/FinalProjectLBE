package models

import "time"

type Broadcast struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Category    string    `json:"category"`
	Tags        string    `json:"tags"`
	Author      string    `json:"author"`
	AuthorEmail string    `json:"author_email"`
	ImageURL    string    `json:"image_url"`
	CTAType     string    `json:"cta_type"`
	CTAURL      string    `json:"cta_url"`
	Clicks      int       `gorm:"default:0" json:"clicks"`
	ExpiryDays  int       `gorm:"-" json:"expiry_days"`
	ExpiryDate  time.Time `json:"expiry_date"`
	Status      string    `gorm:"default:'Aktif'" json:"status"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
