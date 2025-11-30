// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // 切换汉堡菜单图标
            this.classList.toggle('active');
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑导航栏高度
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和提交逻辑
            alert('感谢您的留言，我们将尽快与您联系！');
            this.reset();
        });
    }
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }
        }
    });
    
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.solution-card, .service-card, .case-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});