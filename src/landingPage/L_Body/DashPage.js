import React, { useState } from 'react';
import { ChevronRight, Plus, BookOpen, Users, FileText, HelpCircle, Bookmark } from 'lucide-react';

const StudyDashboard = () => {
  const [savedItems, setSavedItems] = useState(new Set());

  const recentlyViewed = [
    {
      id: 1,
      title: 'Organic Chemistry',
      code: 'SCH 2103',
      documents: 17,
      color: 'bg-green-100',
      icon: 'folder'
    },
    {
      id: 2,
      title: 'Awino',
      author: 'pennings omondi',
      documents: 20,
      color: 'bg-orange-100',
      icon: 'user'
    },
    {
      id: 3,
      title: 'The Civil Code of the Province of...',
      author: 'Quebec; Joseph...',
      documents: 519,
      color: 'bg-purple-100',
      icon: 'book'
    },
    {
      id: 4,
      title: 'Introduction to computer systems',
      documents: 127,
      color: 'bg-green-100',
      icon: 'folder'
    },
    {
      id: 5,
      title: 'ISBN - International Standard Book...',
      author: 'Walravens, Hartmut',
      documents: 7883,
      color: 'bg-purple-100',
      icon: 'book'
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'CAT 1 Organic Chemistry',
      category: 'quiz'
    },
    {
      id: 2,
      title: 'SCH 2101 Chemical Bonding AND Structure',
      category: 'quiz'
    },
    {
      id: 3,
      title: 'Organic chem Notes',
      category: 'quiz'
    },
    {
      id: 4,
      title: 'BMB 1203 Medical Biochemistry II Nursing',
      category: 'quiz'
    },
    {
      id: 5,
      title: 'Medical-surgical-nursing',
      category: 'quiz'
    },
    {
      id: 6,
      title: 'MIDWIFERY PRACTICUM NOTES',
      category: 'quiz'
    }
  ];

  const continueReading = [
    {
      id: 1,
      title: 'Organic Chem. Exam June 2019 final',
      subject: 'Kommunikation',
      pages: '8',
      image: '/api/placeholder/200/250'
    },
    {
      id: 2,
      title: 'CAT 1 Organic Chemistry',
      subject: 'Organic Chemistry',
      pages: '1',
      image: '/api/placeholder/200/250'
    },
    {
      id: 3,
      title: 'SCH 2101 Chemical Bonding AND Structure',
      subject: 'Industrial Chemistry',
      pages: '3',
      image: '/api/placeholder/200/250'
    },
    {
      id: 4,
      title: 'Organic chem Notes',
      subject: 'Organic Chemistry',
      pages: '140',
      image: '/api/placeholder/200/250'
    },
    {
      id: 5,
      title: 'SCH102 Notes',
      subject: 'Organic chemistry 1',
      pages: '122',
      image: '/api/placeholder/200/250'
    },
    {
      id: 6,
      title: 'Vignettes - Summary ISBN - International...',
      subject: 'Indiana History',
      pages: '3',
      image: '/api/placeholder/200/250'
    }
  ];

  const actionCards = [
    {
      id: 1,
      title: 'Create a quiz',
      icon: Plus,
      gradient: 'from-pink-400 to-purple-400'
    },
    {
      id: 2,
      title: 'Ask a Question',
      icon: HelpCircle,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      id: 3,
      title: 'Summarize your notes',
      icon: FileText,
      gradient: 'from-blue-400 to-purple-400'
    }
  ];

  const toggleSave = (id) => {
    const newSaved = new Set(savedItems);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedItems(newSaved);
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'folder':
        return <div className="w-6 h-6 bg-green-500 rounded"></div>;
      case 'user':
        return <div className="w-6 h-6 bg-orange-500 rounded-full"></div>;
      case 'book':
        return <div className="w-6 h-6 bg-purple-500 rounded"></div>;
      default:
        return <div className="w-6 h-6 bg-gray-500 rounded"></div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Recently Viewed Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recently viewed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {recentlyViewed.map((item) => (
            <div key={item.id} className={`${item.color} rounded-2xl p-6 relative`}>
              <div className="mb-4">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                {item.code && (
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 text-gray-400">🏷️</span>
                    <span>{item.code}</span>
                  </div>
                )}
                {item.author && (
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{item.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>{item.documents} documents</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-xl py-2 px-4 text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-colors">
                <Plus className="w-4 h-4" />
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Action Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {actionCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${card.gradient}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-800">{card.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best Quizzes Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Best quizzes for you</h2>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🧪</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-800 mb-4 line-clamp-3">{quiz.title}</h3>
              <button className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                Start quiz
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Continue Reading Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Continue reading</h2>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {continueReading.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-gray-300" />
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-600">
                  {item.pages}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.subject}</p>
                <button 
                  onClick={() => toggleSave(item.id)}
                  className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg py-2 px-3 text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <Bookmark className={`w-4 h-4 ${savedItems.has(item.id) ? 'fill-current text-blue-500' : ''}`} />
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Viewed Bottom Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recently viewed</h2>
        <div className="text-gray-500 text-center py-8">
          <p>No recently viewed items to show</p>
        </div>
      </section>
    </div>
  );
};

export default StudyDashboard;