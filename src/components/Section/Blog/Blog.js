import React from 'react';
import './Blog.css';
import { useTranslation } from 'react-i18next';

function Blog() {
    const { t } = useTranslation();

    return (
        <section className="blog content-section">
            <div className="container">
                <h2>{t('blog.heading')}</h2>
                <nav>
                    <ul>
                        <li><a href="https://blog.raffaelbrandao.com/iniciando-projeto-spring-boot-no-spring-initializr/">Iniciando um novo projeto Spring Boot no Spring initializr</a></li>
                        <li><a href="https://blog.raffaelbrandao.com/como-usar-perfis-no-spring-boot/">Como usar perfis no Spring Boot?</a></li>
                        <li><a href="https://blog.raffaelbrandao.com/amazon-ecs/">Amazon ECS</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Blog;