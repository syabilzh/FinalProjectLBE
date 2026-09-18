package models

import (
	"time"

	"gorm.io/gorm"
)

type Broadcast struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Title       string         `json:"title" gorm:"type:varchar(100);not null"`
	Description string         `json:"description" gorm:"type:text;not null"`
	Category    string         `json:"category" gorm:"type:varchar(50);not null"`
	Tags        string         `json:"tags" gorm:"type:text"`
	Author      string         `json:"author" gorm:"type:varchar(100);not null"`
	AuthorEmail string         `json:"author_email" gorm:"type:varchar(100);not null"`
	CtaType     string         `json:"cta_type" gorm:"type:varchar(50);not null"`
	CtaUrl      string         `json:"cta_url" gorm:"type:text;not null"`
	Clicks      int            `json:"clicks" gorm:"default:0"`
	ExpiryDate  time.Time      `json:"expiry_date" gorm:"not null"`
	Status      string         `json:"status" gorm:"type:varchar(20);default:'Aktif'"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`
}
