# Information Architecture — BH LearnSphere

## Top Navigation (Public)
- Home (`/`)
- Courses (`/courses`)
- Instructors (`/instructors`)
- Pricing (`/pricing`)
- Blog (`/blog`) — optional
- Sign In / Get Started (`/auth/signin`)

## Footer
- About Us (`/about`)
- Contact / Support (`/support`)
- Terms of Service (`/terms`)
- Privacy Policy (`/privacy`)
- FAQ (`/faq`)
- Social Links

---

## Roles & Dashboards
### Student
- Dashboard (`/dashboard`)
- My Courses (`/dashboard/courses`)
- Course Detail (`/courses/:slug`)
- Module & Lesson Viewer (`/courses/:slug/module-:id/lesson-:id`)
- Quiz (`/courses/:slug/quiz-:id`)
- Progress & Certificates (`/dashboard/progress`)

### Instructor
- Studio Dashboard (`/instructor/studio`)
- Course Builder (`/instructor/studio/new-course`)
- Edit Course (`/instructor/studio/:courseId/edit`)
- Quiz Builder (`/instructor/studio/:courseId/quiz-builder`)
- Analytics (`/instructor/studio/:courseId/analytics`)

### Admin
- Admin Dashboard (`/admin`)
- User Management (`/admin/users`)
- Course Management (`/admin/courses`)
- Reports / Exports (`/admin/reports`)

---

## Entities
- **User** {id, role, name, email, bio, avatar}
- **Course** {id, slug, title, description, category, instructorId}
- **Module** {id, courseId, title, order}
- **Lesson** {id, moduleId, type: video/pdf/text, title, content, assets}
- **Quiz** {id, courseId/moduleId, questions[]}
- **Question** {id, text, type: MCQ/TF/Short, answers[]}
- **Attempt** {id, userId, quizId, score, responses[]}
- **DiscussionThread** {id, courseId, posts[]}
- **Enrollment** {userId, courseId, status, progress}
- **Badge/Certificate** (phase 2+)

---

## URL Examples
- `/courses/full-stack-web-development`
- `/courses/ai-ml-course`
- `/courses/game-development`
- `/courses/full-stack-web-development/module-1/html-basics`
- `/courses/ai-ml-course/module-3/neural-networks/lesson-2`
- `/dashboard`
- `/instructor/studio`
- `/admin/users`

---

## Seed Courses (Phase 0 Content)  
*(Fill in real module names and lesson titles — no placeholders)*

### 1. Full Stack Web Development
- Modules:
  - **Module 1: [TODO name]**
    - Lesson 1: [TODO]
    - Lesson 2: [TODO]
  - **Module 2: [TODO name]**
    - Lesson 1: [TODO]
    - Lesson 2: [TODO]
- Instructor: [TODO Name, Bio]

### 2. AI / Machine Learning
- Modules:
  - **Module 1: [TODO]**
    - Lesson 1: [TODO]
    - Lesson 2: [TODO]
- Instructor: [TODO Name, Bio]

### 3. Game Development
- Modules:
  - **Module 1: [TODO]**
    - Lesson 1: [TODO]
    - Lesson 2: [TODO]
- Instructor: [TODO Name, Bio]

---

## Notes
- All URLs must be SEO-friendly, lowercase, hyphen-separated.
- No lorem ipsum. Real text and real assets.
- Accessibility: Each lesson must define alt text for images, captions for video, keyboard navigable structure.
