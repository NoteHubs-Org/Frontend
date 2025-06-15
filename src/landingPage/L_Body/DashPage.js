import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Brain, 
  Clock, 
  TrendingUp, 
  Plus,
  ChevronRight,
  Star,
  Play,
  Eye,
  Download
} from 'lucide-react';

const StudyDashboard = () => {
  // Sample data - replace with your actual data
  const [recentlyViewed] = useState([
    { id: 1, title: "Organic Chemistry Notes", type: "document", course: "SCH 2103", lastViewed: "2 hours ago", progress: 75 },
    { id: 2, title: "Civil Code Quiz", type: "quiz", course: "Law 101", lastViewed: "1 day ago", progress: 100 },
    { id: 3, title: "Computer Systems Intro", type: "document", course: "CS 101", lastViewed: "3 days ago", progress: 45 },
    { id: 4, title: "Medical Biochemistry", type: "quiz", course: "BMB 1203", lastViewed: "5 days ago", progress: 90 }
  ]);

  const [bestQuizzes] = useState([
    { id: 1, title: "Organic chem Notes", description: "Test your knowledge of organic chemistry fundamentals", difficulty: "Medium", questions: 25, rating: 4.8 },
    { id: 2, title: "BMB 1203 Medical Biochemistry II", description: "Advanced biochemistry concepts for nursing students", difficulty: "Hard", questions: 30, rating: 4.9 },
    { id: 3, title: "Medical-surgical-nursing", description: "Comprehensive nursing practice questions", difficulty: "Medium", questions: 40, rating: 4.7 },
    { id: 4, title: "Human anatomy 1 for nursing students", description: "Essential anatomy knowledge for healthcare", difficulty: "Easy", questions: 20, rating: 4.6 },
    { id: 5, title: "MIDWIFERY PRACTICUM NOTES", description: "Practical midwifery skills and knowledge", difficulty: "Hard", questions: 35, rating: 4.8 }
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
    { id: 4, title: "Introduction to computer systems", code: "CS 101", documents: 127, trend: "+6%", students: 1650, color: "green" },
    { id: 5, title: "ISBN - International Standard Book", code: "Walravens", documents: 7956, trend: "+22%", students: 3200, color: "blue" }
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

  const styles = {
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    section: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    sectionHeader: {
      padding: '24px',
      borderBottom: '1px solid #f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    sectionTitleText: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0
    },
    sectionContent: {
      padding: '24px'
    },
    grid: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    gridLarge: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
    },
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease',
      backgroundColor: '#ffffff'
    },
    cardHover: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    courseLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '500'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#1f2937',
      marginBottom: '8px',
      lineHeight: '1.4',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    },
    cardDescription: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '12px',
      lineHeight: '1.4',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '12px'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#2563eb',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    },
    progressText: {
      fontSize: '12px',
      color: '#6b7280',
      marginTop: '4px'
    },
    badge: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    newBadge: {
      fontSize: '12px',
      color: '#16a34a',
      backgroundColor: '#dcfce7',
      padding: '4px 8px',
      borderRadius: '12px',
      fontWeight: '500'
    },
    trendBadge: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#16a34a',
      backgroundColor: '#f0fdf4',
      padding: '4px 8px',
      borderRadius: '4px'
    },
    button: {
      width: '100%',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.2s ease'
    },
    primaryButton: {
      backgroundColor: '#7c3aed',
      color: '#ffffff'
    },
    primaryButtonHover: {
      backgroundColor: '#6d28d9'
    },
    secondaryButton: {
      backgroundColor: '#16a34a',
      color: '#ffffff'
    },
    secondaryButtonHover: {
      backgroundColor: '#15803d'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      color: '#374151',
      border: '1px solid #d1d5db'
    },
    outlineButtonHover: {
      backgroundColor: '#f9fafb'
    },
    smallButton: {
      padding: '4px 12px',
      fontSize: '12px',
      width: 'auto'
    },
    iconButton: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '14px'
    },
    statsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    statRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px'
    },
    statLabel: {
      color: '#6b7280'
    },
    statValue: {
      fontWeight: '500',
      color: '#1f2937'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Recently Viewed Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <Clock size={24} color="#2563eb" />
            <h2 style={styles.sectionTitleText}>Recently Viewed</h2>
          </div>
          <a href="#" style={styles.iconButton}>View All</a>
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.grid}>
            {recentlyViewed.map((item) => (
              <div 
                key={item.id} 
                style={styles.card}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.courseLabel}>
                    {getTypeIcon(item.type)}
                    <span>{item.course}</span>
                  </div>
                  <Eye size={16} color="#9ca3af" />
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <div style={styles.cardMeta}>
                  <span>{item.lastViewed}</span>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${item.progress}%`
                    }}
                  ></div>
                </div>
                <div style={styles.progressText}>{item.progress}% complete</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Quizzes Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <Brain size={24} color="#7c3aed" />
            <h2 style={styles.sectionTitleText}>Best Quizzes for You</h2>
          </div>
          <ChevronRight size={20} color="#9ca3af" />
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.gridLarge}>
            {bestQuizzes.map((quiz) => (
              <div 
                key={quiz.id} 
                style={styles.card}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Brain size={20} color="#7c3aed" />
                  <span style={{ ...styles.badge, ...getDifficultyStyle(quiz.difficulty) }}>
                    {quiz.difficulty}
                  </span>
                </div>
                <h3 style={styles.cardTitle}>{quiz.title}</h3>
                <p style={styles.cardDescription}>{quiz.description}</p>
                <div style={styles.cardMeta}>
                  <span>{quiz.questions} questions</span>
                  <div style={styles.ratingContainer}>
                    <Star size={12} fill="#fbbf24" color="#fbbf24" />
                    <span>{quiz.rating}</span>
                  </div>
                </div>
                <button 
                  style={{ ...styles.button, ...styles.primaryButton }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.primaryButtonHover.backgroundColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.primaryButton.backgroundColor}
                >
                  <Play size={16} />
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Documents Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <FileText size={24} color="#16a34a" />
            <h2 style={styles.sectionTitleText}>New Documents in Your Courses</h2>
          </div>
          <a href="#" style={{ ...styles.iconButton, color: '#16a34a' }}>View All</a>
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.grid}>
            {newDocuments.map((doc) => (
              <div 
                key={doc.id} 
                style={styles.card}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={styles.cardHeader}>
                  <div style={{ ...styles.courseLabel, color: '#16a34a' }}>
                    <FileText size={16} />
                    <span>{doc.course}</span>
                  </div>
                  <span style={styles.newBadge}>New</span>
                </div>
                <h3 style={styles.cardTitle}>{doc.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>by {doc.author}</p>
                <div style={styles.cardMeta}>
                  <span>{doc.uploadDate}</span>
                  <span>{doc.pages} pages</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#6b7280' }}>
                    <Download size={12} />
                    <span>{doc.downloads}</span>
                  </div>
                  <button 
                    style={{ ...styles.button, ...styles.secondaryButton, ...styles.smallButton }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.secondaryButtonHover.backgroundColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.secondaryButton.backgroundColor}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <TrendingUp size={24} color="#ea580c" />
            <h2 style={styles.sectionTitleText}>Trending in Your Courses</h2>
          </div>
          <ChevronRight size={20} color="#9ca3af" />
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.gridLarge}>
            {trendingCourses.map((course) => (
              <div 
                key={course.id} 
                style={{
                  ...styles.card,
                  backgroundColor: getCardBackgroundColor(course.color),
                  borderColor: getCardBorderColor(course.color),
                  borderWidth: '2px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <BookOpen size={20} color="#6b7280" />
                  <span style={styles.trendBadge}>
                    {course.trend}
                  </span>
                </div>
                <h3 style={{ ...styles.cardTitle, fontWeight: '600' }}>{course.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>{course.code}</p>
                <div style={styles.statsGrid}>
                  <div style={styles.statRow}>
                    <span style={styles.statLabel}>Documents</span>
                    <span style={styles.statValue}>{course.documents.toLocaleString()}</span>
                  </div>
                  <div style={styles.statRow}>
                    <span style={styles.statLabel}>Students</span>
                    <span style={styles.statValue}>{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <button 
                  style={{ ...styles.button, ...styles.outlineButton, marginTop: '16px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.outlineButtonHover.backgroundColor}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <Plus size={16} />
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyDashboard;