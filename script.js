// Global function for template navigation
window.navigateToTemplate = function(templateName) {
    window.location.href = 'template-page.html?template=' + templateName;
};

// Get template parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const templateType = urlParams.get('template');

// Template content definitions
const templates = {
    'project-roadmap': {
        title: 'Project Roadmap',
        icon: '📊',
        author: 'Sarah Chen',
        rating: 4.8,
        installs: '2.3K',
        tags: ['Project Management', 'Planning', 'Templates'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📊</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Project Roadmap - Q1 2024</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">
                            Share
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📊</div>
            <h1 class="editor-title">Project Roadmap - Q1 2024</h1>

            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Strategic planning and milestones for our product development
                </p>
            </div>

            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🎯 Goals</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Launch version 2.0 with new user dashboard</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" checked style="margin-top: 4px;">
                        <span style="text-decoration: line-through; opacity: 0.6;">Complete user research interviews</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Increase user engagement by 30%</span>
                    </div>
                </div>
            </div>

            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📅 Timeline</h2>
                <div style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">January - March</h3>
                    <p style="margin: 0 0 8px 0; padding-left: 16px;">• Design sprint and prototyping</p>
                    <p style="margin: 0 0 8px 0; padding-left: 16px;">• User testing phase 1</p>
                    <p style="margin: 0; padding-left: 16px;">• Backend infrastructure improvements</p>
                </div>
                <div style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">April - June</h3>
                    <p style="margin: 0 0 8px 0; padding-left: 16px;">• Development sprint</p>
                    <p style="margin: 0 0 8px 0; padding-left: 16px;">• Beta testing</p>
                    <p style="margin: 0; padding-left: 16px;">• Launch preparation</p>
                </div>
            </div>

            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">👥 Team</h2>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <div style="background: #f7f6f3; padding: 12px 16px; border-radius: 6px;">
                        <strong>Sarah Chen</strong> - Product Manager
                    </div>
                    <div style="background: #f7f6f3; padding: 12px 16px; border-radius: 6px;">
                        <strong>Alex Kumar</strong> - Lead Engineer
                    </div>
                    <div style="background: #f7f6f3; padding: 12px 16px; border-radius: 6px;">
                        <strong>Maria Garcia</strong> - UX Designer
                    </div>
                </div>
            </div>
        `
    },
    'meeting-notes': {
        title: 'Meeting Notes',
        icon: '📝',
        author: 'Alex Kumar',
        rating: 4.6,
        installs: '1.9K',
        tags: ['Meetings', 'Documentation', 'Collaboration'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📝</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Product Team Meeting - March 23, 2024</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">
                            Share
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📝</div>
            <h1 class="editor-title">Product Team Meeting - March 23, 2024</h1>

            <div class="editor-block">
                <p class="editor-text" style="font-size: 14px; color: rgba(55, 53, 47, 0.65); margin-bottom: 24px;">
                    <strong>Time:</strong> 10:00 AM - 11:00 AM<br>
                    <strong>Attendees:</strong> Sarah, Alex, Maria, James
                </p>
            </div>

            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 12px 0;">📋 Agenda</h2>
                <ol style="margin: 0; padding-left: 24px;">
                    <li style="margin-bottom: 8px;">Review Q1 progress</li>
                    <li style="margin-bottom: 8px;">Discuss upcoming feature releases</li>
                    <li style="margin-bottom: 8px;">User feedback review</li>
                    <li>Next steps and action items</li>
                </ol>
            </div>

            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 12px 0;">💡 Key Discussion Points</h2>
                <div style="background: #fff7ed; border-left: 3px solid #fb923c; padding: 16px; margin-bottom: 12px; border-radius: 4px;">
                    <strong>Feature Prioritization</strong><br>
                    Team agreed to prioritize the new dashboard redesign over mobile app updates. This aligns with user feedback showing 80% of users access via desktop.
                </div>
                <div style="background: #ecfdf5; border-left: 3px solid #10b981; padding: 16px; margin-bottom: 12px; border-radius: 4px;">
                    <strong>User Feedback</strong><br>
                    Positive response to the new onboarding flow. NPS score improved from 42 to 58. Users specifically appreciate the guided tour feature.
                </div>
                <div style="background: #eff6ff; border-left: 3px solid #3b82f6; padding: 16px; border-radius: 4px;">
                    <strong>Technical Considerations</strong><br>
                    Alex raised concerns about API rate limits. Will need to optimize caching strategy before the next release.
                </div>
            </div>

            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 12px 0;">✅ Action Items</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span><strong>Sarah:</strong> Schedule user interviews for dashboard testing by end of week</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span><strong>Alex:</strong> Review API optimization plan and share with team by Tuesday</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span><strong>Maria:</strong> Create high-fidelity mockups for dashboard redesign</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span><strong>James:</strong> Update project timeline in roadmap document</span>
                    </div>
                </div>
            </div>

            <div class="editor-block">
                <p class="editor-text" style="font-size: 14px; color: rgba(55, 53, 47, 0.65);">
                    <strong>Next Meeting:</strong> March 30, 2024 at 10:00 AM
                </p>
            </div>
        `
    },
    'product-jam': {
        title: 'Product Jam',
        icon: '🧠',
        author: 'Maria Garcia',
        rating: 4.9,
        installs: '3.2K',
        tags: ['Brainstorming', 'Product', 'Innovation'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">🧠</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Product Jam - Brainstorming Session</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">
                            Share
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">🧠</div>
            <h1 class="editor-title">Product Jam - Brainstorming Session</h1>

            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Creative ideation and feature exploration for our next big product initiative
                </p>
            </div>

            <div class="editor-block" style="margin-bottom: 32px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">💡 Big Ideas</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>AI-Powered Workflow Automation</strong><br>
                    <span style="color: rgba(55, 53, 47, 0.75);">Integrate Claude AI to help users automate repetitive tasks across their workspace. Users could describe a workflow in natural language and have it automatically execute.</span>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Real-time Collaboration Canvas</strong><br>
                    <span style="color: rgba(55, 53, 47, 0.75);">A Figma-like canvas where teams can brainstorm together with sticky notes, diagrams, and sketches. Perfect for remote design sprints.</span>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>Smart Templates Marketplace</strong><br>
                    <span style="color: rgba(55, 53, 47, 0.75);">Let users discover, install, and customize templates from the community. Templates could include automation, custom views, and pre-configured databases.</span>
                </div>
            </div>

            <div class="editor-block" style="margin-bottom: 32px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🎨 UX Improvements</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Add keyboard shortcuts for common actions (cmd+k for quick search)</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Implement dark mode with automatic switching based on system preferences</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" checked style="margin-top: 4px;">
                        <span style="text-decoration: line-through; opacity: 0.6;">Redesign onboarding flow to reduce time-to-value</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Add inline comments and reactions to page blocks</span>
                    </div>
                </div>
            </div>

            <div class="editor-block" style="margin-bottom: 32px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📊 User Feedback</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 4px; margin-bottom: 8px;">
                    <strong>Request from @sarah_chen:</strong><br>
                    "Would love to see better mobile editing capabilities. Currently too hard to format tables on phone."
                    <div style="margin-top: 8px; font-size: 12px; color: rgba(55, 53, 47, 0.5);">
                        👍 47 upvotes
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 4px; margin-bottom: 8px;">
                    <strong>Request from @alex_dev:</strong><br>
                    "API rate limits are too restrictive for automation workflows. Need higher limits or better error handling."
                    <div style="margin-top: 8px; font-size: 12px; color: rgba(55, 53, 47, 0.5);">
                        👍 32 upvotes
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 4px;">
                    <strong>Request from @maria_design:</strong><br>
                    "Add ability to create reusable design system components across pages."
                    <div style="margin-top: 8px; font-size: 12px; color: rgba(55, 53, 47, 0.5);">
                        👍 28 upvotes
                    </div>
                </div>
            </div>

            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">✅ Next Steps</h2>
                <div style="background: #f7f6f3; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 12px 0;">
                        1. <strong>Prioritize ideas</strong> - Vote on top 3 features for Q2<br>
                        2. <strong>Create specs</strong> - Document requirements for selected features<br>
                        3. <strong>User testing</strong> - Schedule interviews to validate concepts<br>
                        4. <strong>Prototype</strong> - Build low-fi prototypes for feedback
                    </p>
                </div>
            </div>
        `
    },
    'team-goals-okrs': {
        title: 'Team Goals & OKRs',
        icon: '💼',
        author: 'Alex Johnson',
        rating: 4.8,
        installs: '1.2K',
        tags: ['Goals', 'OKRs', 'Planning'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">💼</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Team Goals & OKRs</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">💼</div>
            <h1 class="editor-title">Team Goals & OKRs - Q1 2024</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Track team objectives and key results to stay aligned on what matters most.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🎯 Objective 1: Increase Product Quality</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                    <strong>KR1:</strong> Reduce bug count by 40%<br>
                    <div style="margin-top: 8px; background: white; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: #2383e2; height: 100%; width: 60%;"></div>
                    </div>
                    <span style="font-size: 12px; color: rgba(55, 53, 47, 0.5);">60% complete</span>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>KR2:</strong> Achieve 95% test coverage<br>
                    <div style="margin-top: 8px; background: white; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: #2383e2; height: 100%; width: 85%;"></div>
                    </div>
                    <span style="font-size: 12px; color: rgba(55, 53, 47, 0.5);">85% complete</span>
                </div>
            </div>
        `
    },
    'sprint-planning': {
        title: 'Sprint Planning',
        icon: '📋',
        author: 'Michael Torres',
        rating: 4.7,
        installs: '890',
        tags: ['Agile', 'Sprint', 'Planning'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📋</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Sprint Planning - Sprint 12</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📋</div>
            <h1 class="editor-title">Sprint Planning - Sprint 12</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Plan and organize your agile sprint with clear goals and task breakdown.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📅 Sprint Goals</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Complete user authentication refactor</li>
                        <li>Ship mobile app beta release</li>
                        <li>Fix top 10 customer-reported bugs</li>
                    </ul>
                </div>
            </div>
            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📊 Capacity: 80 points</h2>
                <p style="color: rgba(55, 53, 47, 0.65);">Current commitment: 72 points</p>
            </div>
        `
    },
    'weekly-status': {
        title: 'Weekly Status Report',
        icon: '📝',
        author: 'Emma Davis',
        rating: 4.9,
        installs: '2.1K',
        tags: ['Status', 'Reports', 'Updates'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📝</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Weekly Status Report</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📝</div>
            <h1 class="editor-title">Weekly Status Report - Jan 15, 2024</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Share weekly progress and updates with stakeholders.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">✅ Accomplishments</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Launched new dashboard feature to 50% of users</li>
                        <li>Reduced page load time by 30%</li>
                        <li>Completed Q1 planning sessions</li>
                    </ul>
                </div>
            </div>
            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🚧 Blockers</h2>
                <div style="background: #fff3cd; padding: 16px; border-radius: 6px;">
                    <p style="margin: 0;">Waiting on API access from partner team for integration work.</p>
                </div>
            </div>
        `
    },
    'product-launch': {
        title: 'Product Launch Plan',
        icon: '🚀',
        author: 'Sarah Chen',
        rating: 4.9,
        installs: '1.5K',
        tags: ['Launch', 'Product', 'Marketing'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">🚀</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Product Launch Plan</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">🚀</div>
            <h1 class="editor-title">Product Launch Plan - v2.0</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Coordinate successful product releases with clear timelines and responsibilities.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📅 Launch Timeline</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Week 1:</strong> Beta testing with early adopters
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Week 2:</strong> Marketing campaign kickoff
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>Week 3:</strong> Public launch + press release
                </div>
            </div>
        `
    },
    'brainstorm': {
        title: 'Brainstorm Session',
        icon: '💡',
        author: 'Alex Kumar',
        rating: 4.6,
        installs: '980',
        tags: ['Brainstorming', 'Ideas', 'Creativity'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">💡</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Brainstorm Session</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">💡</div>
            <h1 class="editor-title">Brainstorm Session - New Features</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Capture and organize creative ideas from the team.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">💭 Ideas</h2>
                <div style="background: #fff9db; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Idea 1:</strong> Add dark mode for better accessibility
                </div>
                <div style="background: #e7f3ff; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Idea 2:</strong> Integrate with Slack for notifications
                </div>
                <div style="background: #ffebe9; padding: 16px; border-radius: 6px;">
                    <strong>Idea 3:</strong> Create mobile app companion
                </div>
            </div>
        `
    },
    'growth-strategy': {
        title: 'Growth Strategy',
        icon: '📈',
        author: 'Maria Garcia',
        rating: 4.7,
        installs: '1.1K',
        tags: ['Growth', 'Strategy', 'Business'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📈</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Growth Strategy - 2024</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📈</div>
            <h1 class="editor-title">Growth Strategy - 2024</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Plan your business growth initiatives with clear metrics and tactics.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🎯 Growth Goals</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Grow user base by 200%</li>
                        <li>Achieve $5M ARR</li>
                        <li>Expand to 3 new markets</li>
                    </ul>
                </div>
            </div>
            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📊 Key Metrics</h2>
                <p style="color: rgba(55, 53, 47, 0.65);">CAC: $50 | LTV: $500 | Conversion Rate: 5%</p>
            </div>
        `
    },
    'todo-list': {
        title: 'To-Do List',
        icon: '✅',
        author: 'Emma Davis',
        rating: 4.9,
        installs: '3.2K',
        tags: ['Productivity', 'Tasks', 'Lists'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">✅</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">To-Do List</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">✅</div>
            <h1 class="editor-title">My To-Do List</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Organize and prioritize your daily tasks.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Today</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Review pull requests</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" checked style="margin-top: 4px;">
                        <span style="text-decoration: line-through; opacity: 0.6;">Send weekly update email</span>
                    </div>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <div style="display: flex; align-items: start; gap: 8px;">
                        <input type="checkbox" style="margin-top: 4px;">
                        <span>Prepare presentation for tomorrow</span>
                    </div>
                </div>
            </div>
        `
    },
    'daily-planner': {
        title: 'Daily Planner',
        icon: '📅',
        author: 'Alex Kumar',
        rating: 4.8,
        installs: '2.5K',
        tags: ['Planning', 'Productivity', 'Schedule'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📅</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Daily Planner</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📅</div>
            <h1 class="editor-title">Daily Planner - Jan 16, 2024</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Structure your day for maximum productivity.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">⏰ Schedule</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>9:00 AM -</strong> Team standup
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>10:00 AM -</strong> Deep work: Feature development
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>2:00 PM -</strong> Client meeting
                </div>
            </div>
        `
    },
    'goal-tracker': {
        title: 'Goal Tracker',
        icon: '🎯',
        author: 'Sarah Chen',
        rating: 4.7,
        installs: '1.8K',
        tags: ['Goals', 'Tracking', 'Progress'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">🎯</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Goal Tracker</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">🎯</div>
            <h1 class="editor-title">2024 Goal Tracker</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Monitor progress toward your personal and professional objectives.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🎯 My Goals</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                    <strong>Learn Python</strong><br>
                    <div style="margin-top: 8px; background: white; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: #2383e2; height: 100%; width: 40%;"></div>
                    </div>
                    <span style="font-size: 12px; color: rgba(55, 53, 47, 0.5);">40% complete</span>
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>Run a marathon</strong><br>
                    <div style="margin-top: 8px; background: white; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: #2383e2; height: 100%; width: 25%;"></div>
                    </div>
                    <span style="font-size: 12px; color: rgba(55, 53, 47, 0.5);">25% complete</span>
                </div>
            </div>
        `
    },
    'task-board': {
        title: 'Task Board',
        icon: '🗂️',
        author: 'Michael Torres',
        rating: 4.8,
        installs: '2.2K',
        tags: ['Kanban', 'Tasks', 'Project Management'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">🗂️</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Task Board</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">🗂️</div>
            <h1 class="editor-title">Task Board</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Kanban-style task management system to visualize your workflow.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📋 To Do</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    Design new landing page
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    Write API documentation
                </div>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">🔄 In Progress</h2>
                <div style="background: #e7f3ff; padding: 16px; border-radius: 6px;">
                    Implement user authentication
                </div>
            </div>
            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">✅ Done</h2>
                <div style="background: #d3f9d8; padding: 16px; border-radius: 6px;">
                    Fix login bug
                </div>
            </div>
        `
    },
    'class-notes': {
        title: 'Class Notes',
        icon: '📚',
        author: 'Emma Davis',
        rating: 4.9,
        installs: '2.8K',
        tags: ['School', 'Notes', 'Education'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📚</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Class Notes</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">📚</div>
            <h1 class="editor-title">Computer Science 101 - Lecture 5</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Take and organize lecture notes for better learning.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📝 Key Concepts</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Data structures: arrays, linked lists, trees</li>
                        <li>Time complexity: O(n), O(log n), O(1)</li>
                        <li>Sorting algorithms: quicksort, mergesort</li>
                    </ul>
                </div>
            </div>
            <div class="editor-block">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📖 Reading</h2>
                <p style="color: rgba(55, 53, 47, 0.65);">Chapter 4: Introduction to Algorithms</p>
            </div>
        `
    },
    'assignment-tracker': {
        title: 'Assignment Tracker',
        icon: '✏️',
        author: 'Alex Kumar',
        rating: 4.8,
        installs: '2.3K',
        tags: ['School', 'Assignments', 'Deadlines'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">✏️</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Assignment Tracker</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">✏️</div>
            <h1 class="editor-title">Assignment Tracker - Spring 2024</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Keep track of homework and deadlines across all your classes.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📚 Upcoming Assignments</h2>
                <div style="background: #fff3cd; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Math 201:</strong> Problem Set 3 - Due Jan 20
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>English 102:</strong> Essay Draft - Due Jan 25
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>Physics 301:</strong> Lab Report - Due Jan 30
                </div>
            </div>
        `
    },
    'study-schedule': {
        title: 'Study Schedule',
        icon: '🎓',
        author: 'Sarah Chen',
        rating: 4.7,
        installs: '1.9K',
        tags: ['School', 'Study', 'Schedule'],
        content: `
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">🎓</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">Study Schedule</span>
                        <span style="background: white; border: 1px solid rgba(55, 53, 47, 0.16); padding: 1px 6px; border-radius: 4px; font-size: 11px; color: rgba(55, 53, 47, 0.6);">Template</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style="height: 80px;"></div>
            <div style="font-size: 78px; line-height: 1; margin-bottom: 16px;">🎓</div>
            <h1 class="editor-title">Study Schedule - Finals Week</h1>
            <div class="editor-block">
                <p class="editor-text" style="font-size: 18px; color: rgba(55, 53, 47, 0.65); margin-bottom: 32px;">
                    Organize your study time for maximum retention and success.
                </p>
            </div>
            <div class="editor-block" style="margin-bottom: 24px;">
                <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">📅 This Week</h2>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Monday:</strong> Math (2 hours) + Physics (2 hours)
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                    <strong>Tuesday:</strong> Computer Science (3 hours)
                </div>
                <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                    <strong>Wednesday:</strong> Review all subjects (4 hours)
                </div>
            </div>
        `
    }
};

// Load the appropriate template content
function loadTemplate() {
    const template = templates[templateType] || templates['product-jam'];

    // Update page title
    document.title = template.title;
    document.getElementById('pageTitle').textContent = template.title;

    // Update sidebar current page in Recents
    document.getElementById('currentPageIcon').textContent = template.icon;
    document.getElementById('currentPageName').textContent = template.title;

    // Add to recent templates
    addToRecent(templateType, template);

    // Highlight the active page in Suggested section
    const suggestedItems = document.querySelectorAll('#suggestedTemplates .sidebar-item');
    suggestedItems.forEach(item => {
        const itemTemplate = item.getAttribute('data-template');
        if (itemTemplate === templateType) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Load content
    document.getElementById('templateContent').innerHTML = template.content;

    // Attach ellipsis click handler after template loads
    setTimeout(() => {
        const ellipsisBtns = document.querySelectorAll('.banner-icon-btn');
        ellipsisBtns.forEach(btn => {
            // Find the button with the ellipsis icon (three dots)
            const svg = btn.querySelector('svg path[d*="M10 11.375"]');
            if (svg) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'variants.html';
                });
            }
        });
    }, 100);
}

// Manage recent templates
function addToRecent(templateKey, template) {
    const recentContainer = document.getElementById('recentTemplates');

    // Get current recent items (stored in localStorage)
    let recentTemplates = JSON.parse(localStorage.getItem('recentTemplates') || '[]');

    // Remove if already exists
    recentTemplates = recentTemplates.filter(t => t.key !== templateKey);

    // Add to beginning
    recentTemplates.unshift({
        key: templateKey,
        icon: template.icon,
        title: template.title
    });

    // Keep only last 5
    recentTemplates = recentTemplates.slice(0, 5);

    // Save to localStorage
    localStorage.setItem('recentTemplates', JSON.stringify(recentTemplates));

    // Clear the container but keep a reference to currentPage div
    const currentPageDiv = document.getElementById('currentPage');
    const allItems = Array.from(recentContainer.children);

    // Remove all children
    allItems.forEach(item => item.remove());

    // Re-add currentPage if it exists
    if (currentPageDiv) {
        recentContainer.appendChild(currentPageDiv);
    }

    // Add recent templates after currentPage, but skip the one that's currently active
    recentTemplates.forEach(t => {
        // Skip the current active template since it's already shown as currentPage
        if (t.key === templateKey) {
            return;
        }

        const item = document.createElement('div');
        item.className = 'sidebar-item';
        item.setAttribute('data-template', t.key);
        item.innerHTML = `
            <span class="item-icon">${t.icon}</span>
            <span class="item-text">${t.title}</span>
        `;
        item.addEventListener('click', function() {
            const template = this.getAttribute('data-template');
            window.location.href = `template-page.html?template=${template}`;
        });
        recentContainer.appendChild(item);
    });
}

// Tab switching (same as variant2)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

        const tabName = this.getAttribute('data-tab');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        const targetContent = document.getElementById(tabName + 'Content');
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    });
});

// Load template on page load
loadTemplate();

// Templates panel functionality
const templatesPanelOverlay = document.getElementById('templatesPanelOverlay');
const closeTemplatesPanelBtn = document.getElementById('closeTemplatesPanelBtn');
const templatesSearchInput = document.getElementById('templatesSearchInput');

// Get the "More" button under Suggested section
const suggestedMoreBtn = document.querySelector('.sidebar-section:last-child .more-btn');

if (suggestedMoreBtn) {
    suggestedMoreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (templatesPanelOverlay.classList.contains('active')) {
            templatesPanelOverlay.classList.remove('active');
        } else {
            templatesPanelOverlay.classList.add('active');
            setTimeout(() => {
                const generateTemplateInput = document.getElementById('generateTemplateInput');
                if (generateTemplateInput) {
                    generateTemplateInput.focus();
                }
            }, 100);
        }
    });
}

// Close templates panel
if (closeTemplatesPanelBtn) {
    closeTemplatesPanelBtn.addEventListener('click', function() {
        templatesPanelOverlay.classList.remove('active');
    });
}

// Agents panel functionality
const agentsPanelOverlay = document.getElementById('agentsPanelOverlay');
const closeAgentsPanelBtn = document.getElementById('closeAgentsPanelBtn');
const agentsMoreBtn = document.getElementById('agentsMoreBtn');

if (agentsMoreBtn) {
    agentsMoreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (agentsPanelOverlay.classList.contains('active')) {
            agentsPanelOverlay.classList.remove('active');
        } else {
            agentsPanelOverlay.classList.add('active');
        }
    });
}

// Close agents panel
if (closeAgentsPanelBtn) {
    closeAgentsPanelBtn.addEventListener('click', function() {
        agentsPanelOverlay.classList.remove('active');
    });
}

// Add click handlers for template items in the templates panel overlay
if (templatesPanelOverlay) {
    templatesPanelOverlay.addEventListener('click', function(e) {
        const item = e.target.closest('.sidebar-item[data-template]');
        if (item) {
            const template = item.getAttribute('data-template');
            console.log('Template clicked:', template);
            window.location.href = `template-page.html?template=${template}`;
        }
    });
}

// Add click handlers to suggested templates in sidebar - direct approach
document.querySelectorAll('#suggestedTemplates .sidebar-item[data-template]').forEach(function(item) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const template = this.getAttribute('data-template');
        window.location.href = `template-page.html?template=${template}`;
    }, true);
});

// Fix all sidebar items in templates panel to be clickable
document.querySelectorAll('.agents-panel .sidebar-item').forEach(function(item) {
    item.style.position = 'relative';
    item.style.zIndex = '1';
    item.style.cursor = 'pointer';

    // Make all child elements not block clicks
    item.querySelectorAll('*').forEach(function(child) {
        child.style.pointerEvents = 'none';
    });

});

// Backup: event delegation on the entire sidebar
const sidebar = document.querySelector('.notion-sidebar');
if (sidebar) {
    const items = document.querySelectorAll('#suggestedTemplates .sidebar-item');
    console.log('Setting cursor for', items.length, 'items');
    items.forEach(item => {
        item.style.cursor = 'pointer';
    });
}

// Settings panel functionality
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const notionEditor = document.getElementById('notionEditor');
const slidersButtons = document.querySelectorAll('.banner-icon-btn');
const bannerIconsOverlay = document.getElementById('bannerIconsOverlay');
const slidersIconOverlay = document.getElementById('slidersIconOverlay');
const shareIconOverlay = document.getElementById('shareIconOverlay');
const saveBtn = document.querySelector('.settings-save-btn');

// Function to open settings panel
function openSettingsPanel() {
    settingsPanel.classList.add('active');
    notionEditor.classList.add('with-settings');
    bannerIconsOverlay.classList.add('active');
    slidersButtons.forEach(btn => {
        if (btn.querySelector('img[src*="sliders"]')) {
            btn.classList.add('active');
        }
    });
    if (slidersIconOverlay) {
        slidersIconOverlay.classList.add('active');
    }
    // Autofocus the customize search input
    const customizeInput = document.querySelector('.customize-search-input');
    if (customizeInput) {
        setTimeout(() => customizeInput.focus(), 100);
    }
}

// Add event listener to customize input to change button color when typing
const customizeInput = document.querySelector('.customize-search-input');
const customizeSendButton = document.querySelector('.customize-send-button');
const aiChatConversation = document.getElementById('aiChatConversation');
const aiChatMessages = document.getElementById('aiChatMessages');
const settingsSectionsWrapper = document.getElementById('settingsSectionsWrapper');
const settingsPanelContent = document.querySelector('.settings-panel-content');

let originalPageContent = '';
let currentChanges = '';

if (customizeInput && customizeSendButton) {
    customizeInput.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            customizeSendButton.classList.add('has-text');
        } else {
            customizeSendButton.classList.remove('has-text');
        }
    });

    // Handle submit button click
    customizeSendButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleChatSubmit();
    });

    // Handle enter key (with shift+enter for new line)
    customizeInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatSubmit();
        }
    });
}

function handleChatSubmit() {
    console.log('handleChatSubmit called');
    const message = customizeInput.value.trim();
    console.log('Message:', message);
    if (!message) {
        console.log('No message, returning');
        return;
    }

    // Switch to chat mode
    settingsPanelContent.classList.add('chat-mode');
    settingsSectionsWrapper.style.display = 'none';
    aiChatConversation.style.display = 'block';
    console.log('Switched to chat mode');

    // Add user message
    addChatMessage(message, 'user');

    // Clear input
    customizeInput.value = '';
    customizeSendButton.classList.remove('has-text');

    // Show AI thinking
    showAIThinking();
    console.log('Showing AI thinking');

    // Simulate AI response after 2 seconds
    setTimeout(() => {
        console.log('AI response timeout triggered');
        hideAIThinking();
        simulatePageChanges(message);
        showAcceptRejectPrompt(message);
    }, 2000);
}

function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = `chat-bubble ${sender}`;
    bubbleDiv.textContent = text;

    messageDiv.appendChild(bubbleDiv);
    aiChatMessages.appendChild(messageDiv);

    // Scroll to bottom
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function showAIThinking() {
    const thinkingDiv = document.createElement('div');
    thinkingDiv.id = 'aiThinkingIndicator';
    thinkingDiv.className = 'chat-message ai';
    thinkingDiv.innerHTML = `
        <div class="ai-thinking">
            <img src="assets/nosy-gifs/writing-light.gif" class="ai-thinking-animation" alt="Writing animation">
            <span class="ai-thinking-text">Generating changes...</span>
        </div>
    `;
    aiChatMessages.appendChild(thinkingDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function hideAIThinking() {
    const thinkingDiv = document.getElementById('aiThinkingIndicator');
    if (thinkingDiv) {
        thinkingDiv.remove();
    }
}

function simulatePageChanges(userMessage) {
    console.log('simulatePageChanges called with:', userMessage);
    // Wait a moment for content to be ready
    setTimeout(() => {
        console.log('simulatePageChanges timeout triggered');
        // Store original content if not already stored
        if (!originalPageContent || Object.keys(originalPageContent).length === 0) {
            originalPageContent = {};
            const editorTitle = document.querySelector('.notion-editor .editor-title');
            const editorTexts = document.querySelectorAll('.notion-editor .editor-text');
            const editorBlocks = document.querySelectorAll('.notion-editor .editor-block');

            console.log('Found title:', editorTitle);
            console.log('Found texts:', editorTexts.length);
            console.log('Found blocks:', editorBlocks.length);

            if (editorTitle) {
                originalPageContent.title = editorTitle.textContent;
            }
            originalPageContent.texts = Array.from(editorTexts).map(el => el.innerHTML);
            originalPageContent.blocks = Array.from(editorBlocks).map(el => el.innerHTML);
        }

        // Analyze user message to determine what to change
        const lowerMessage = userMessage.toLowerCase();
        const editorTitle = document.querySelector('.notion-editor .editor-title');
        const editorTexts = document.querySelectorAll('.notion-editor .editor-text');
        const editorBlocks = document.querySelectorAll('.notion-editor .editor-block');

        console.log('About to make changes. Title found:', !!editorTitle, 'Texts found:', editorTexts.length);

        // Check what type of edit the user wants
        console.log('Analyzing message:', lowerMessage);

        if (lowerMessage.includes('title') || lowerMessage.includes('heading') || lowerMessage.includes('name')) {
            // Change only title
            console.log('Changing title only');
            if (editorTitle) {
                editorTitle.textContent = generateNewTitle(userMessage, originalPageContent.title);
                editorTitle.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                editorTitle.style.transition = 'background-color 0.3s ease';
            }
        } else if (lowerMessage.includes('intro') || lowerMessage.includes('description') || lowerMessage.includes('summary')) {
            // Change first paragraph only
            console.log('Changing description only');
            if (editorTexts[0]) {
                editorTexts[0].innerHTML = generateNewDescription(userMessage, 0);
                editorTexts[0].style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                editorTexts[0].style.transition = 'background-color 0.3s ease';
            }
        } else if (lowerMessage.includes('everything') || lowerMessage.includes('all') || lowerMessage.includes('entire') || lowerMessage.includes('whole') || lowerMessage.includes('page')) {
            // Change multiple elements
            console.log('Changing everything');
            if (editorTitle) {
                editorTitle.textContent = generateNewTitle(userMessage, originalPageContent.title);
                editorTitle.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                editorTitle.style.transition = 'background-color 0.3s ease';
            }
            editorTexts.forEach((el, index) => {
                console.log('Updating text block', index);
                el.innerHTML = generateNewDescription(userMessage, index);
                el.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                el.style.transition = 'background-color 0.3s ease';
            });

            // Also update some heading blocks
            const headings = document.querySelectorAll('.notion-editor h2, .notion-editor h3');
            headings.forEach((heading, index) => {
                if (index < 2) {
                    console.log('Updating heading', index);
                    heading.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                    heading.style.transition = 'background-color 0.3s ease';
                }
            });
        } else {
            // Default: intelligent changes based on keywords
            console.log('Default: changing based on keywords');
            if (editorTitle) {
                editorTitle.textContent = generateNewTitle(userMessage, originalPageContent.title);
                editorTitle.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                editorTitle.style.transition = 'background-color 0.3s ease';
            }
            // Change first 2 text blocks for more visible changes
            editorTexts.forEach((el, index) => {
                if (index < 2) {
                    console.log('Updating text block', index);
                    el.innerHTML = generateNewDescription(userMessage, index);
                    el.style.backgroundColor = 'rgba(35, 131, 226, 0.1)';
                    el.style.transition = 'background-color 0.3s ease';
                }
            });
        }

        console.log('Changes complete');
    }, 100);
}

function generateNewTitle(userMessage, originalTitle) {
    const lowerMessage = userMessage.toLowerCase();

    console.log('Generating title from message:', userMessage);

    // Try to extract specific content from the message
    if (lowerMessage.includes('change') || lowerMessage.includes('make') || lowerMessage.includes('turn') || lowerMessage.includes('convert')) {
        // User wants to transform content
        if (lowerMessage.includes('marketing')) {
            return 'Marketing Campaign - ' + (new Date().getFullYear()) + ' Product Launch';
        } else if (lowerMessage.includes('meeting')) {
            return 'Team Meeting Notes - ' + (new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
        } else if (lowerMessage.includes('product')) {
            return 'Product Development Roadmap - ' + (new Date().getFullYear());
        } else if (lowerMessage.includes('sprint') || lowerMessage.includes('agile')) {
            return 'Sprint Planning - Development Cycle';
        } else if (lowerMessage.includes('design')) {
            return 'Design System Review - UI/UX Updates';
        } else if (lowerMessage.includes('sales')) {
            return 'Sales Strategy - Revenue Pipeline';
        } else if (lowerMessage.includes('customer')) {
            return 'Customer Success Plan - Onboarding & Retention';
        } else if (lowerMessage.includes('engineering')) {
            return 'Engineering Roadmap - Technical Architecture';
        } else if (lowerMessage.includes('research')) {
            return 'Research Findings - User Insights & Data';
        }
    }

    // Look for specific topics without "change" keywords
    if (lowerMessage.includes('marketing')) {
        return 'Marketing Strategy Document - ' + (new Date().getFullYear());
    } else if (lowerMessage.includes('meeting')) {
        return 'Meeting Agenda - Team Collaboration';
    } else if (lowerMessage.includes('product')) {
        return 'Product Roadmap - Feature Planning';
    } else if (lowerMessage.includes('sprint')) {
        return 'Sprint Planning Session';
    } else if (lowerMessage.includes('design')) {
        return 'Design Review - User Experience';
    } else if (lowerMessage.includes('sales')) {
        return 'Sales Pipeline Overview';
    } else if (lowerMessage.includes('customer')) {
        return 'Customer Success Framework';
    }

    // Generic update
    return originalTitle + ' (Updated)';
}

function generateNewDescription(userMessage, index = 0) {
    const lowerMessage = userMessage.toLowerCase();
    console.log('Generating description for:', userMessage, 'at index:', index);

    const descriptions = {
        marketing: [
            'Comprehensive marketing strategy focused on digital channels, content creation, and customer acquisition. Includes social media campaigns, email marketing, and partnership opportunities.',
            'Our go-to-market plan emphasizes brand awareness and lead generation through targeted campaigns across multiple channels.',
            'Strategic marketing initiatives designed to increase market share and drive customer engagement through innovative content strategies.',
            'Multi-channel marketing approach combining paid advertising, organic social media, and influencer partnerships to maximize reach.'
        ],
        meeting: [
            'Weekly team sync to align on priorities, review progress, and address blockers. Open forum for cross-functional collaboration.',
            'Regular check-in session for the team to discuss ongoing projects, share updates, and coordinate on upcoming deliverables.',
            'Collaborative meeting space for team members to connect, share insights, and make decisions on key initiatives.',
            'Structured agenda covering project status updates, resource allocation discussions, and action item assignments.'
        ],
        product: [
            'Product development roadmap outlining feature priorities, technical requirements, and launch timelines for the next quarter.',
            'Strategic product plan detailing upcoming releases, user feedback integration, and competitive positioning.',
            'Comprehensive product strategy covering market research, feature development, and go-to-market execution.',
            'Detailed product roadmap with milestone tracking, resource planning, and stakeholder communication protocols.'
        ],
        sprint: [
            'Agile sprint planning session to break down user stories, estimate effort, and commit to deliverables for the upcoming two-week sprint.',
            'Sprint retrospective and planning meeting to review completed work and set goals for the next iteration.',
            'Team planning session to prioritize backlog items, assign tasks, and establish sprint objectives.',
            'Collaborative sprint kickoff covering story refinement, capacity planning, and dependency identification.'
        ],
        design: [
            'Design review covering user interface updates, usability improvements, and brand consistency across all touchpoints.',
            'UX/UI design session focused on user flows, visual hierarchy, and interaction patterns for the product.',
            'Design system documentation and component library updates to maintain consistency across platforms.',
            'User research findings and design recommendations to improve overall product experience.'
        ],
        sales: [
            'Sales pipeline review including lead generation, deal progression, and revenue forecasting for the quarter.',
            'Sales strategy focused on territory expansion, key account management, and closing techniques.',
            'Revenue operations plan covering lead qualification, sales enablement, and conversion optimization.',
            'Strategic sales initiatives targeting enterprise customers with tailored solutions and partnership models.'
        ],
        customer: [
            'Customer success initiatives focused on improving onboarding experience, reducing churn, and increasing product adoption.',
            'Client relationship management strategies to enhance satisfaction scores and drive long-term retention.',
            'Customer engagement programs including training resources, support documentation, and community building.',
            'Success metrics tracking and customer health scoring to proactively identify at-risk accounts.'
        ],
        default: [
            'Updated content reflecting the latest priorities, timelines, and strategic initiatives for the team.',
            'Revised documentation incorporating recent feedback and evolving project requirements.',
            'Refreshed materials aligned with current business objectives and organizational goals.',
            'Modified content to reflect new insights, data-driven decisions, and stakeholder input.'
        ]
    };

    // Find matching category
    let category = 'default';
    for (let key in descriptions) {
        if (lowerMessage.includes(key)) {
            category = key;
            break;
        }
    }

    // Use index to cycle through different descriptions, or random if index is too high
    const categoryDescriptions = descriptions[category];
    const selectedIndex = index < categoryDescriptions.length ? index : Math.floor(Math.random() * categoryDescriptions.length);

    console.log('Selected category:', category, 'description index:', selectedIndex);
    return categoryDescriptions[selectedIndex];
}

function showAcceptRejectPrompt(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let responseText = "I've updated the page content. Would you like to keep these changes?";

    // Customize response based on what was changed
    if (lowerMessage.includes('title') || lowerMessage.includes('heading')) {
        responseText = "I've updated the page title. Would you like to keep this change?";
    } else if (lowerMessage.includes('intro') || lowerMessage.includes('description')) {
        responseText = "I've rewritten the introduction. Would you like to keep this change?";
    } else if (lowerMessage.includes('everything') || lowerMessage.includes('all')) {
        responseText = "I've updated multiple sections of the page. Would you like to keep these changes?";
    } else if (lowerMessage.includes('marketing')) {
        responseText = "I've adapted the content for a marketing focus. Would you like to keep these changes?";
    } else if (lowerMessage.includes('meeting')) {
        responseText = "I've adjusted the content for a meeting format. Would you like to keep these changes?";
    }

    const promptDiv = document.createElement('div');
    promptDiv.id = 'acceptRejectPrompt';
    promptDiv.className = 'chat-message ai';
    promptDiv.innerHTML = `
        <div class="chat-bubble ai">
            ${responseText}
        </div>
        <div class="chat-action-buttons">
            <button class="chat-action-btn accept" onclick="acceptChanges()">Accept changes</button>
            <button class="chat-action-btn reject" onclick="rejectChanges()">Reject</button>
        </div>
    `;
    aiChatMessages.appendChild(promptDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function acceptChanges() {
    const editorTitle = document.querySelector('.notion-editor .editor-title');
    const editorTexts = document.querySelectorAll('.notion-editor .editor-text');

    if (editorTitle) {
        editorTitle.style.backgroundColor = '';
    }

    editorTexts.forEach(el => {
        el.style.backgroundColor = '';
    });

    const promptDiv = document.getElementById('acceptRejectPrompt');
    if (promptDiv) {
        promptDiv.remove();
    }

    addChatMessage('Changes accepted! The page has been updated.', 'ai');
}

function rejectChanges() {
    const editorTitle = document.querySelector('.notion-editor .editor-title');
    const editorTexts = document.querySelectorAll('.notion-editor .editor-text');

    if (editorTitle && originalPageContent.title) {
        editorTitle.textContent = originalPageContent.title;
        editorTitle.style.backgroundColor = '';
    }

    editorTexts.forEach((el, index) => {
        if (originalPageContent.texts && originalPageContent.texts[index]) {
            el.innerHTML = originalPageContent.texts[index];
        }
        el.style.backgroundColor = '';
    });

    const promptDiv = document.getElementById('acceptRejectPrompt');
    if (promptDiv) {
        promptDiv.remove();
    }

    addChatMessage('Changes rejected. The page has been reverted to its original state.', 'ai');
}

// Make functions globally accessible
window.acceptChanges = acceptChanges;
window.rejectChanges = rejectChanges;

// Function to close settings panel
function closeSettingsPanel() {
    settingsPanel.classList.remove('active');
    notionEditor.classList.remove('with-settings');
    bannerIconsOverlay.classList.remove('active');
    slidersButtons.forEach(btn => {
        if (btn.querySelector('img[src*="sliders"]')) {
            btn.classList.remove('active');
        }
    });
    if (slidersIconOverlay) {
        slidersIconOverlay.classList.remove('active');
    }

    // Reset chat mode when closing
    resetChatMode();
}

function resetChatMode() {
    // Exit chat mode
    if (settingsPanelContent) {
        settingsPanelContent.classList.remove('chat-mode');
    }

    // Show settings sections again
    if (settingsSectionsWrapper) {
        settingsSectionsWrapper.style.display = 'block';
    }

    // Hide chat conversation
    if (aiChatConversation) {
        aiChatConversation.style.display = 'none';
    }

    // Clear chat messages
    if (aiChatMessages) {
        aiChatMessages.innerHTML = '';
    }

    // Clear input field
    if (customizeInput) {
        customizeInput.value = '';
    }

    // Remove has-text class from button
    if (customizeSendButton) {
        customizeSendButton.classList.remove('has-text');
    }

    console.log('Chat mode reset');
}

// Get all sliders buttons from the banner (one per template)
// Find the sliders button (the one with the sliders icon)
slidersButtons.forEach(btn => {
    if (btn.querySelector('img[src*="sliders"]')) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (settingsPanel.classList.contains('active')) {
                closeSettingsPanel();
            } else {
                openSettingsPanel();
            }
        });
    }
});

// Overlay sliders icon
if (slidersIconOverlay) {
    slidersIconOverlay.addEventListener('click', function(e) {
        e.stopPropagation();
        closeSettingsPanel();
    });
}

// Share icon handler (placeholder)
if (shareIconOverlay) {
    shareIconOverlay.addEventListener('click', function() {
        console.log('Share clicked');
        // Add share functionality here
    });
}

// Close settings panel with close button
if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', function() {
        closeSettingsPanel();
    });
}

// Close settings panel with save button
if (saveBtn) {
    saveBtn.addEventListener('click', function() {
        closeSettingsPanel();
    });
}

// Reviews modal functionality
const showAllReviewsBtn = document.getElementById('showAllReviewsBtn');
const reviewsModalOverlay = document.getElementById('reviewsModalOverlay');
const closeReviewsModalBtn = document.getElementById('closeReviewsModalBtn');

if (showAllReviewsBtn) {
    showAllReviewsBtn.addEventListener('click', function() {
        reviewsModalOverlay.classList.add('active');
    });
}

if (closeReviewsModalBtn) {
    closeReviewsModalBtn.addEventListener('click', function() {
        reviewsModalOverlay.classList.remove('active');
    });
}

// Close modal when clicking outside
if (reviewsModalOverlay) {
    reviewsModalOverlay.addEventListener('click', function(e) {
        if (e.target === reviewsModalOverlay) {
            reviewsModalOverlay.classList.remove('active');
        }
    });
}

// Category filtering with subcategories
const categoryData = {
    'all': {
        sections: [
            { title: 'Popular in your workplace', templates: ['team-goals-okrs', 'sprint-planning', 'weekly-status'] },
            { title: 'Trending', templates: ['product-launch', 'brainstorm', 'growth-strategy'] },
            { title: 'Productivity', templates: ['todo-list', 'daily-planner', 'goal-tracker'] },
            { title: 'Project Management', templates: ['project-roadmap', 'task-board', 'meeting-notes'] },
            { title: 'School', templates: ['class-notes', 'assignment-tracker', 'study-schedule'] }
        ]
    },
    'productivity': {
        sections: [
            { title: 'Task Management', templates: ['todo-list', 'task-board', 'goal-tracker'] },
            { title: 'Planning', templates: ['daily-planner', 'weekly-status'] },
            { title: 'Tracking', templates: ['goal-tracker', 'team-goals-okrs'] }
        ]
    },
    'project-management': {
        sections: [
            { title: 'Planning & Roadmaps', templates: ['project-roadmap', 'sprint-planning', 'product-launch'] },
            { title: 'Team Collaboration', templates: ['meeting-notes', 'brainstorm', 'weekly-status'] },
            { title: 'Tracking & Reporting', templates: ['task-board', 'team-goals-okrs'] }
        ]
    },
    'school': {
        sections: [
            { title: 'Note Taking', templates: ['class-notes', 'meeting-notes'] },
            { title: 'To-Do & Planning', templates: ['assignment-tracker', 'study-schedule', 'daily-planner'] },
            { title: 'Project Planning', templates: ['project-roadmap', 'task-board'] }
        ]
    }
};

// Handle category pill clicks
document.querySelectorAll('.category-pill-filter').forEach(pill => {
    pill.addEventListener('click', function() {
        const category = this.dataset.category;

        // Update active state
        document.querySelectorAll('.category-pill-filter').forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        // Update sections
        updateCategorySections(category);
    });
});

function updateCategorySections(category) {
    const sectionsContainer = document.querySelector('.agents-sections');
    if (!sectionsContainer) return;

    const data = categoryData[category];
    if (!data) return;

    // Clear existing sections
    sectionsContainer.innerHTML = '';

    // Create new sections based on category
    data.sections.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'agents-section';

        const titleEl = document.createElement('div');
        titleEl.className = 'agents-section-title';
        titleEl.textContent = section.title;
        sectionEl.appendChild(titleEl);

        // Add template items (simplified for now - you can expand this)
        section.templates.forEach(templateId => {
            // Here you would create the full template item HTML
            // For now, just placeholder
        });

        const moreBtn = document.createElement('button');
        moreBtn.className = 'more-btn';
        moreBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75" /></svg>More';
        sectionEl.appendChild(moreBtn);

        sectionsContainer.appendChild(sectionEl);
    });
}

// Ellipsis button to go back to marketplace variants
setTimeout(() => {
    const ellipsisBtn = document.getElementById('ellipsisBtn');
    if (ellipsisBtn) {
        ellipsisBtn.addEventListener('click', function(e) {
            console.log('Ellipsis clicked!');
            window.location.href = 'variants.html';
        });
        console.log('Ellipsis button found and handler attached');
    } else {
        console.log('Ellipsis button NOT found');
    }
}, 500);

// Position template hover previews using fixed positioning
document.addEventListener('mouseover', function(e) {
    if (!e.target.closest('.template-item-wrapper')) return;

    const wrapper = e.target.closest('.template-item-wrapper');
    const preview = wrapper.querySelector('.template-hover-preview');
    if (!preview) return;

    const item = wrapper.querySelector('.sidebar-item');
    if (!item) return;

    // Wait a tick for display:block to apply
    setTimeout(() => {
        const itemRect = item.getBoundingClientRect();
        const previewHeight = preview.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Position horizontally: right edge of panel + margin
        preview.style.left = '298px';

        // Position vertically aligned with the item
        let topPos = itemRect.top;

        // Check if preview would bleed off bottom of screen
        if (topPos + previewHeight > viewportHeight - 20) {
            // Shift up so it fits
            topPos = Math.max(20, viewportHeight - previewHeight - 20);
        }

        preview.style.top = topPos + 'px';
    }, 0);
});

// Generate Template Functionality
const generateTemplateInput = document.getElementById('generateTemplateInput');
const generateTemplateBtn = document.getElementById('generateTemplateBtn');

// Change button style when typing
if (generateTemplateInput) {
    generateTemplateInput.addEventListener('input', function() {
        if (this.value.trim()) {
            generateTemplateBtn.style.background = '#2383e2';
            generateTemplateBtn.querySelector('img').style.filter = 'brightness(0) invert(1)';
        } else {
            generateTemplateBtn.style.background = 'rgba(55, 53, 47, 0.08)';
            generateTemplateBtn.querySelector('img').style.filter = 'none';
        }
    });

    // Handle Enter key
    generateTemplateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            generateNewTemplate(this.value.trim());
        }
    });

    // Handle button click
    generateTemplateBtn.addEventListener('click', function() {
        const prompt = generateTemplateInput.value.trim();
        if (prompt) {
            generateNewTemplate(prompt);
        }
    });
}

function generateNewTemplate(prompt) {
    // Clear the input
    generateTemplateInput.value = '';
    generateTemplateBtn.style.background = 'rgba(55, 53, 47, 0.08)';
    generateTemplateBtn.querySelector('img').style.filter = 'none';

    // Close the templates panel
    const templatesPanelOverlay = document.getElementById('templatesPanelOverlay');
    if (templatesPanelOverlay) {
        templatesPanelOverlay.classList.remove('active');
    }

    // Show loading state with skeleton
    const templateContent = document.getElementById('templateContent');
    if (templateContent) {
        templateContent.innerHTML = `
            <style>
                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }
                .skeleton {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 1000px 100%;
                    animation: shimmer 2s infinite;
                    border-radius: 4px;
                }
            </style>

            <!-- Page Header -->
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="skeleton" style="width: 24px; height: 24px; border-radius: 4px;"></div>
                        <div class="skeleton" style="width: 200px; height: 16px;"></div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style="height: 80px;"></div>

            <div style="padding: 24px 96px 96px 96px; line-height: 1.5; max-width: 900px;">
                <!-- Large icon skeleton -->
                <div class="skeleton" style="width: 78px; height: 78px; border-radius: 8px; margin-bottom: 16px;"></div>

                <!-- Title skeleton -->
                <div class="skeleton" style="width: 60%; height: 40px; margin-bottom: 24px;"></div>

                <!-- Subtitle skeleton -->
                <div class="skeleton" style="width: 80%; height: 16px; margin-bottom: 8px;"></div>
                <div class="skeleton" style="width: 70%; height: 16px; margin-bottom: 32px;"></div>

                <!-- Tip box skeleton -->
                <div style="padding: 16px; background: rgba(35, 131, 226, 0.05); border-left: 3px solid #2383e2; border-radius: 4px; margin-bottom: 32px;">
                    <div class="skeleton" style="width: 90%; height: 14px; margin-bottom: 6px;"></div>
                    <div class="skeleton" style="width: 75%; height: 14px;"></div>
                </div>

                <!-- Section title skeleton -->
                <div class="skeleton" style="width: 150px; height: 24px; margin-bottom: 16px;"></div>

                <!-- Content lines skeleton -->
                <div class="skeleton" style="width: 100%; height: 16px; margin-bottom: 12px;"></div>
                <div class="skeleton" style="width: 95%; height: 16px; margin-bottom: 12px;"></div>
                <div class="skeleton" style="width: 85%; height: 16px; margin-bottom: 32px;"></div>

                <!-- Another section title skeleton -->
                <div class="skeleton" style="width: 180px; height: 24px; margin-bottom: 16px;"></div>

                <!-- More content lines -->
                <div class="skeleton" style="width: 100%; height: 16px; margin-bottom: 12px;"></div>
                <div class="skeleton" style="width: 90%; height: 16px; margin-bottom: 12px;"></div>
            </div>
        `;

        // After 2 seconds, show the generated template
        setTimeout(() => {
            generateTemplateContent(prompt);
        }, 2000);
    }
}

function generateTemplateContent(prompt) {
    const templateContent = document.getElementById('templateContent');
    if (templateContent) {
        templateContent.innerHTML = `
            <!-- Preview Banner -->
            <div style="position: fixed; top: 0; left: 244px; right: 0; background: #F0F6FD; padding: 12px 24px; z-index: 101; border-bottom: 1px solid rgba(35, 131, 226, 0.2);">
                <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 10C12.5 11.3813 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10ZM18.75 10C18.75 10 15.3344 16.25 10 16.25C4.66563 16.25 1.25 10 1.25 10C1.25 10 4.66563 3.75 10 3.75C15.3344 3.75 18.75 10 18.75 10ZM14.375 10C14.375 7.58437 12.4156 5.625 10 5.625C7.58437 5.625 5.625 7.58437 5.625 10C5.625 12.4156 7.58437 14.375 10 14.375C12.4156 14.375 14.375 12.4156 14.375 10Z" fill="#2383e2"/>
                    </svg>
                    <span style="font-size: 14px; color: #2383e2; font-weight: 500; margin-right: 4px;">This is a preview of a generated template</span>
                    <button id="addTemplateBtn" style="padding: 7px 6px; background: transparent; color: #2383e2; border: 1px solid rgba(35, 131, 226, 0.35); border-radius: 6px; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; gap: 6px;">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.875 9.0625V10.9375H10.9375V16.875H9.0625V10.9375H3.125V9.0625H9.0625V3.125H10.9375V9.0625H16.875Z" fill="#2383e2"/>
                        </svg>
                        Add template
                    </button>
                </div>
            </div>

            <!-- Page Header -->
            <div style="position: fixed; top: 49px; left: 244px; right: 0; background: white; padding: 12px 24px; z-index: 100; border-bottom: 1px solid rgba(55, 53, 47, 0.09);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 18px; line-height: 1;">📄</span>
                        <span style="font-size: 14px; color: rgb(55, 53, 47); font-weight: 400;">${prompt}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="banner-icon-btn" style="margin-left: 12px;">
                            <img src="assets/sliders.svg" width="18" height="18">
                            <span style="font-size: 14px; color: rgba(55, 53, 47, 0.8); margin-left: 6px;">Settings</span>
                        </button>
                        <div style="width: 1px; height: 16px; background: #F0EFED;"></div>
                        <button class="banner-text-btn">Share</button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L12.163 7.515L18 8.265L13.91 12.135L15.027 18L10 15.515L4.973 18L6.09 12.135L2 8.265L7.837 7.515L10 2Z" stroke="rgb(55, 53, 47)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="banner-icon-btn">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m-12 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div style="height: 129px;"></div>

            <div style="padding: 24px 96px 96px 96px; line-height: 1.5; max-width: 900px;">
                <div class="page-title-area" style="margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                        <span style="font-size: 78px; line-height: 1;">📄</span>
                        <input type="text" value="${prompt}" style="font-size: 40px; font-weight: 700; border: none; outline: none; flex: 1; padding: 3px 2px; background: transparent; color: rgb(55, 53, 47);" />
                    </div>
                </div>

                <div style="font-size: 16px; color: rgba(55, 53, 47, 0.65); margin-bottom: 24px;">
                    <p style="margin: 0;">Use this template as a starting point for your work. Customize it to fit your needs.</p>
                </div>

                <div style="margin-top: 32px; padding: 16px; background: rgba(35, 131, 226, 0.05); border-left: 3px solid #2383e2; border-radius: 4px; margin-bottom: 32px;">
                    <p style="margin: 0; font-size: 15px; color: rgba(55, 53, 47, 0.8);">
                        <strong>Tip:</strong> Click anywhere to start editing. Use the toolbar to format text, add images, databases, and more.
                    </p>
                </div>

                <div class="editor-block" style="margin-bottom: 32px;">
                    <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Overview</h2>
                    <p style="margin: 0 0 12px 0; font-size: 16px; color: rgb(55, 53, 47);">
                        This section provides a high-level summary of the key information and objectives. Add your own details to make this template work for your specific use case.
                    </p>
                    <p style="margin: 0; font-size: 16px; color: rgb(55, 53, 47);">
                        Click on any text to edit it, or use the "+" button to add new blocks like headings, lists, images, or databases.
                    </p>
                </div>

                <div class="editor-block" style="margin-bottom: 32px;">
                    <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Key Points</h2>
                    <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                        <div style="display: flex; align-items: start; gap: 8px;">
                            <input type="checkbox" style="margin-top: 4px;">
                            <span style="font-size: 16px; color: rgb(55, 53, 47);">First important item to address</span>
                        </div>
                    </div>
                    <div style="background: #f7f6f3; padding: 16px; border-radius: 6px; margin-bottom: 8px;">
                        <div style="display: flex; align-items: start; gap: 8px;">
                            <input type="checkbox" style="margin-top: 4px;">
                            <span style="font-size: 16px; color: rgb(55, 53, 47);">Second key consideration</span>
                        </div>
                    </div>
                    <div style="background: #f7f6f3; padding: 16px; border-radius: 6px;">
                        <div style="display: flex; align-items: start; gap: 8px;">
                            <input type="checkbox" style="margin-top: 4px;">
                            <span style="font-size: 16px; color: rgb(55, 53, 47);">Third action item</span>
                        </div>
                    </div>
                </div>

                <div class="editor-block" style="margin-bottom: 32px;">
                    <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Details</h2>
                    <p style="margin: 0 0 12px 0; font-size: 16px; color: rgb(55, 53, 47);">
                        Add more detailed information here. You can include:
                    </p>
                    <ul style="margin: 0 0 12px 0; padding-left: 24px; font-size: 16px; color: rgb(55, 53, 47);">
                        <li style="margin-bottom: 8px;">Bullet points for lists</li>
                        <li style="margin-bottom: 8px;">Tables for organizing data</li>
                        <li style="margin-bottom: 8px;">Images and files</li>
                        <li>Links to related pages</li>
                    </ul>
                </div>

                <div class="editor-block" style="margin-bottom: 32px;">
                    <h2 style="font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Next Steps</h2>
                    <p style="margin: 0 0 16px 0; font-size: 16px; color: rgb(55, 53, 47);">
                        What should happen after using this template?
                    </p>
                    <div style="padding: 16px; background: rgba(251, 191, 36, 0.1); border-left: 3px solid #fbbf24; border-radius: 4px;">
                        <p style="margin: 0; font-size: 15px; color: rgba(55, 53, 47, 0.8);">
                            💡 <strong>Remember:</strong> Customize this template to match your workflow and team's needs.
                        </p>
                    </div>
                </div>

                <div style="margin-top: 48px; color: rgba(55, 53, 47, 0.4); font-size: 15px;">
                    Click here to add more content...
                </div>
            </div>
        `;

        // Add event listener for "Add template" button
        setTimeout(() => {
            const addTemplateBtn = document.getElementById('addTemplateBtn');
            if (addTemplateBtn) {
                addTemplateBtn.addEventListener('click', function() {
                    // Remove active class from all sidebar items
                    document.querySelectorAll('.sidebar-item').forEach(item => {
                        item.classList.remove('active');
                    });

                    // Add the template to the top of the templates list
                    const suggestedTemplates = document.getElementById('suggestedTemplates');
                    if (suggestedTemplates) {
                        const newTemplate = document.createElement('div');
                        newTemplate.className = 'sidebar-item active';
                        newTemplate.style.cssText = 'position: relative; z-index: 1;';
                        newTemplate.innerHTML = `
                            <span class="item-icon" style="pointer-events: none;">📄</span>
                            <span class="item-text" style="pointer-events: none;">${prompt}</span>
                        `;
                        suggestedTemplates.insertBefore(newTemplate, suggestedTemplates.firstChild);
                    }

                    // Add the template to the top of the recents list
                    const recentTemplates = document.getElementById('recentTemplates');
                    if (recentTemplates) {
                        const newRecent = document.createElement('div');
                        newRecent.className = 'sidebar-item active';
                        newRecent.innerHTML = `
                            <span class="item-icon">📄</span>
                            <span class="item-text">${prompt}</span>
                        `;
                        recentTemplates.insertBefore(newRecent, recentTemplates.firstChild);
                    }

                    // Remove the preview banner
                    const banner = document.querySelector('[style*="background: #F0F6FD"]');
                    if (banner) {
                        banner.remove();
                    }

                    // Remove the "Generated" badge
                    const generatedBadge = document.querySelector('[style*="Generated"]');
                    if (generatedBadge && generatedBadge.textContent === 'Generated') {
                        generatedBadge.remove();
                    }

                    // Update the page header to adjust positioning
                    const pageHeader = document.querySelector('[style*="top: 49px"]');
                    if (pageHeader) {
                        pageHeader.style.top = '0';
                    }

                    // Adjust content spacing
                    const spacer = document.querySelector('[style*="height: 129px"]');
                    if (spacer) {
                        spacer.style.height = '80px';
                    }

                    // Close the templates panel if still open
                    const templatesPanelOverlay = document.getElementById('templatesPanelOverlay');
                    if (templatesPanelOverlay) {
                        templatesPanelOverlay.classList.remove('active');
                    }
                });
            }
        }, 0);
    }
}
