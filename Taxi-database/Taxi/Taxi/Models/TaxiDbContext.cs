using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Taxi.Models;

public partial class TaxiDbContext : DbContext
{
    public TaxiDbContext()
    {
    }

    public TaxiDbContext(DbContextOptions<TaxiDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserDetail> UserDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }    
        //=> optionsBuilder.UseMySQL("server=taxidatabase.cdk2o42a248w.ap-southeast-1.rds.amazonaws.com;database=taxi;user=admin;password=riteshakumari;TreatTinyAsBoolean=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.ToTable("Booking");

            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.EndDestination).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(50);
            entity.Property(e => e.StartingDate).HasColumnType("datetime");
            entity.Property(e => e.StartingDestination).HasMaxLength(255);
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("Contact");

            entity.Property(e => e.Message).HasColumnType("text");
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(50);
            entity.Property(e => e.Subject).HasMaxLength(255);
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("Role");

            entity.Property(e => e.RoleName).HasMaxLength(255);
            entity.Property(e => e.Sts).HasMaxLength(50);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("User");

            entity.HasIndex(e => e.RoleId, "RoleId");

            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Password).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(50);

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("User_ibfk_1");
        });

        modelBuilder.Entity<UserDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("UserDetail");

            entity.HasIndex(e => e.UserId, "UserId");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.Sts).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(255);

            entity.HasOne(d => d.User).WithMany(p => p.UserDetails)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("UserDetail_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
