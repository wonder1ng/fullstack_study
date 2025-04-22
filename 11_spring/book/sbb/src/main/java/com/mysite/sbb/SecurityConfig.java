package com.mysite.sbb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration // 스프링 환경 설정 파일 의미
@EnableWebSecurity // 모든 요청 URL이 스프링 시큐리티 제어를 받도록 함
@EnableMethodSecurity(prePostEnabled = true) // @PreAuthorize이 사용하기 위한 설정
public class SecurityConfig {
	@Bean // Bean: 스프링에 의해 생성 또는 관리되는 객체
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	// SecurityFilterChain: 필터 역할하여 URL별 설정 가능
		http.authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
				// 모든 페이지에 모든 요청 허용
				.requestMatchers(new AntPathRequestMatcher("/**")).permitAll())
				// 조건에 맞는 페이지는 csrf 검증 예외
				.csrf((csrf) -> csrf.ignoringRequestMatchers(new AntPathRequestMatcher("/h2-console/**")))
				// XFrameOptionsHeaderWriter: 클릭재킹 공격을 막기 위해 사용된 X-Frame-Options를 관리
				.headers((headers) -> headers.addHeaderWriter(new XFrameOptionsHeaderWriter(XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN)))
				.formLogin((formLogin) -> formLogin.loginPage("/user/login").defaultSuccessUrl("/"))
				.logout((logout) -> logout.logoutRequestMatcher(new AntPathRequestMatcher("/user/logout"))
						.logoutSuccessUrl("/").invalidateHttpSession(true));
		return http.build();
	}
	
	// salt
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
}
