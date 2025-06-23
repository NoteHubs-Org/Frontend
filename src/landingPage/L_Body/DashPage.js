import React, { useState } from 'react';
import "./dashpage.css";
import { 
  BookOpen, 
  FileText, 
  Brain, 
  Clock, 
  TrendingUp, 
  Plus,
  ChevronRight,
  Star,
  Play,
  Eye,
  Download,
} from 'lucide-react';

const StudyDashboard = () => {
  // Sample data - replace with your actual data
  const [recentlyViewed] = useState([
    { id: 1, title: "Organic Chemistry Notes", type: "document", course: "SCH 2103", lastViewed: "2 hours ago", progress: 75 },
    { id: 2, title: "Civil Code Quiz", type: "quiz", course: "Law 101", lastViewed: "1 day ago", progress: 100 },
    { id: 3, title: "Computer Systems Intro", type: "document", course: "CS 101", lastViewed: "3 days ago", progress: 45 },
    { id: 4, title: "Medical Biochemistry", type: "quiz", course: "BMB 1203", lastViewed: "5 days ago", progress: 90 },
    { id: 4, title: "Medical Biochemistry", type: "quiz", course: "BMB 1203", lastViewed: "5 days ago", progress: 90 },
    { id: 4, title: "Medical Biochemistry", type: "quiz", course: "BMB 1203", lastViewed: "5 days ago", progress: 90 },
  ]);

  const [bestQuizzes] = useState([
    { id: 1, title: "Organic chem Notes", descrip: "Test your knowledge of organic chemistry fundamentals", difficulty: "Medium", quess: 25, rating: 4.8 },
    { id: 2, title: "BMB 1203 Medical Biochemistry II", descrip: "Advanced biochemistry concepts for nursing students", difficulty: "Hard", quess: 30, rating: 4.9 },
    { id: 3, title: "Medical-surgical-nursing", descrip: "Comprehensive nursing practice quess", difficulty: "Medium", quess: 40, rating: 4.7 },
    { id: 4, title: "Human anatomy 1 for nursing students", descrip: "Essential anatomy knowledge for healthcare", difficulty: "Easy", quess: 20, rating: 4.6 },
    { id: 5, title: "MIDWIFERY PRACTICUM NOTES", descrip: "Practical midwifery skills and knowledge", difficulty: "Hard", quess: 35, rating: 4.8 }
  ]);

  const [newDocuments] = useState([
    { id: 1, title: "Advanced Organic Synthesis", course: "SCH 2103", author: "Dr. Smith", uploadDate: "Today", pages: 45, downloads: 234 },
    { id: 2, title: "Nursing Care Plans", course: "Nursing 201", author: "Prof. Johnson", uploadDate: "Yesterday", pages: 67, downloads: 189 },
    { id: 3, title: "Computer Networks Basics", course: "CS 101", author: "Dr. Lee", uploadDate: "2 days ago", pages: 32, downloads: 156 },
    { id: 4, title: "Medical Ethics Guidelines", course: "Med 101", author: "Dr. Brown", uploadDate: "3 days ago", pages: 28, downloads: 98 }
  ]);

  const [trendingCourses] = useState([
    { id: 1, title: "Organic Chemistry", code: "SCH 2103", documents: 17, trend: "+15%", students: 1250, color: "green" },
    { id: 2, title: "Awino", code: "pennings omondi", documents: 20, trend: "+12%", students: 890, color: "orange" },
    { id: 3, title: "The Civil Code of the Province", code: "Quebec", documents: 522, trend: "+8%", students: 2100, color: "purple" },
    { id: 4, title: "Introduc to computer systems", code: "CS 101", documents: 127, trend: "+6%", students: 1650, color: "green" },
    { id: 5, title: "ISBN - Internaal Standard Book", code: "Walravens", documents: 7956, trend: "+22%", students: 3200, color: "blue" }
  ]);

  const getDifficultyStyle = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return { color: '#16a34a', backgroundColor: '#dcfce7' };
      case 'Medium': return { color: '#ca8a04', backgroundColor: '#fef3c7' };
      case 'Hard': return { color: '#dc2626', backgroundColor: '#fee2e2' };
      default: return { color: '#6b7280', backgroundColor: '#f3f4f6' };
    }
  };

  const getTypeIcon = (type) => {
    return type === 'quiz' ? <Brain size={16} /> : <FileText size={16} />;
  };

  const getCardBackgroundColor = (color) => {
    switch(color) {
      case 'green': return '#f0fdf4';
      case 'orange': return '#fff7ed';
      case 'purple': return '#faf5ff';
      case 'blue': return '#eff6ff';
      default: return '#f9fafb';
    }
  };

  const getCardBorderColor = (color) => {
    switch(color) {
      case 'green': return '#bbf7d0';
      case 'orange': return '#fed7aa';
      case 'purple': return '#e9d5ff';
      case 'blue': return '#bfdbfe';
      default: return '#e5e7eb';
    }
  };

  return (
    <div className='dash-container'>
      {/* Recently Viewed Sec */}
      <sec className='sec'>
        <div className='sec-header'>
          <div className='sec-title'>
            <Clock size={24} color="#2563eb" />
            <h2 className='sec-title-text'>Recently Viewed</h2>
          </div>
          <a href="#" className='icon-button'>View All</a>
        </div>
        <div className='sec-content'>
          {recentlyViewed.map((item) => (
            <div 
              key={item.id} 
              className='card'
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div className='card-header'>
                <div className='course-label'>
                  {getTypeIcon(item.type)}
                  <span>{item.course}</span>
                </div>
                <Eye size={16} color="#9ca3af" />
              </div>
              <h3 className='card-title'>{item.title}</h3>
              <div className='card-meta'>
                <span>{item.lastViewed}</span>
              </div>
              <div className='progress-bar'>
                <div 
                  className='progress-fill'
                  style={{
                    width: `${item.progress}%`
                  }}
                ></div>
              </div>
              <div className='progress-text'>{item.progress}% complete</div>
            </div>
          ))}
        </div>
      </sec>

      {/* Best Quizzes Sec */}
      <sec className='sec'>
        <div className='sec-header'>
          <div className='sec-title'>
            <Brain size={24} color="#7c3aed" />
            <h2 className='sec-title-text'>Best Quizzes for You</h2>
          </div>
          <ChevronRight className="next-btn"  size={20} color="#9ca3af" />
        </div>
        <div className='sec-content'>
          {bestQuizzes.map((quiz) => (
            <div 
              key={quiz.id} 
              className='card'
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Brain size={20} color="#7c3aed" />
                <span className='badge' style={{  ...getDifficultyStyle(quiz.difficulty) }}>
                  {quiz.difficulty}
                </span>
              </div>
              <h3 className='card-title'>{quiz.title}</h3>
              <p className='card-descrip'>{quiz.descrip}</p>
              <div className='card-meta'>
                <span>{quiz.quess} quess</span>
                <div className='rating-container'>
                  <Star size={12} fill="#fbbf24" color="#fbbf24" />
                  <span>{quiz.rating}</span>
                </div>
              </div>
              <button 
                className='button primary-button'
              >
                <Play size={16} />
                Start Quiz
              </button>
            </div>
          ))}
          </div>
      </sec>

      {/* New Documents Sec */}
      <sec className='sec'>
        <div className='sec-header'>
          <div className='sec-title'>
            <FileText size={24} color="#16a34a" />
            <h2 className='sec-title-text'>New Documents in Your Courses</h2>
          </div>
          <a href="#" className='icon-button' style={{ color: '#16a34a' }}>View All</a>
        </div>
        <div className='sec-content'>
          {newDocuments.map((doc) => (
            <div 
              key={doc.id} 
              className='card'
            >
              <div className='card-header'>
                <div className='course-label' style={{
                    color: '#16a34a' }}>
                  <FileText size={16} />
                  <span>{doc.course}</span>
                </div>
                <span className='new-badge'>New</span>
              </div>
              <h3 className='card-title'>{doc.title}</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>by {doc.author}</p>
              <div className='card-meta'>
                <span>{doc.uploadDate}</span>
                <span>{doc.pages} pages</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#6b7280' }}>
                  <Download size={12} />
                  <span>{doc.downloads}</span>
                </div>
                <button 
                  className='button small-button secondary-button'
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </sec>

      {/* Trending Courses Sec */}
      <sec className='sec'>
        <div className='sec-header'>
          <div className='sec-title'>
            <TrendingUp size={24} color="#ea580c" />
            <h2 className='sec-title-text'>Trending in Your Courses</h2>
          </div>
          <ChevronRight className="next-btn" size={20} color="#9ca3af" />
        </div>
        <div className='sec-content'>
            {trendingCourses.map((course) => (
              <div 
                key={course.id} 
                className='card'
                style={{
                  backgroundColor: getCardBackgroundColor(course.color),
                  borderColor: getCardBorderColor(course.color),
                  borderWidth: '2px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <BookOpen size={20} color="#6b7280" />
                  <span className='trend-badge'>
                    {course.trend}
                  </span>
                </div>
                <h3 className='card-title' style={{  fontWeight: '600' }}>{course.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>{course.code}</p>
                <div className='stats-grid'>
                  <div className='stat-row'>
                    <span className='stat-lagel'>Documents</span>
                    <span className='stat-value'>{course.documents.toLocaleString()}</span>
                  </div>
                  <div className='stat-row'>
                    <span className='stat-label'>Students</span>
                    <span className='stat-value'>{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <button 
                className='button online-button'
                  style={{ marginTop: '16px' }}
                >
                  <Plus size={16} />
                  Follow
                </button>
              </div>
            ))}
          </div>
      </sec>
    </div>
  );
};

export default StudyDashboard;