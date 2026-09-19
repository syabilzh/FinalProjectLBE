package config

import (
	"fmt"
	"log"

	"myits-broadcast-backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	host := "127.0.0.1"
	user := "postgres"
	password := "010307" // Ganti password ini sesuai password PostgreSQL kamu!
	dbname := "myits_broadcast_db"
	port := "5432"

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Jakarta",
		host, user, password, dbname, port)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal terhubung ke database PostgreSQL: ", err)
	}

	err = database.AutoMigrate(&models.Broadcast{})
	if err != nil {
		log.Fatal("Gagal AutoMigrate: ", err)
	}

	DB = database
	fmt.Println("Berhasil terhubung ke Database PostgreSQL & AutoMigrate sukses!")
}
