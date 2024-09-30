
<style>
    .i-footer {
    background-color: whitesmoke;
    border-top: 2px solid #ddd; 
    padding: 10px 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-left {
    text-align: left;
}

.footer-right {
    text-align: right;
    font-size: 14px;
    color: #6c757d;
}

</style>


<!-- Footer Start -->
<!-- Footer Start -->
<footer class="i-footer">
    <div class="footer-content">
        <span class="footer-left">
            &copy; <script> document.write(new Date().getFullYear())</script> {{ env('APP_ALLIASE') }}
        </span>
        <span class="footer-right">
            Crafted with <i class="fas fa-heart text-danger"></i> by {{ env('APP_BRAND') }} Team
        </span>
    </div>
</footer>
