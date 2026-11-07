/*
 * NỘI DUNG PORTFOLIO — chỉ cần sửa file này (và thay ảnh trong assets/img) rồi tải lại trang.
 * Nguồn: CV, Achievements, Projects, Testimonials, Additional_Information của Nguyễn Minh Anh.
 * Lưu ý: dùng file .js (không phải .json) để trang mở được trực tiếp bằng cách nhấp đúp, không cần server.
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "Nguyễn Minh Anh",
    role: "Digital Transformation & Operations Manager",
    location: "TP. Hồ Chí Minh, Việt Nam",
    tagline: "Simplify before digitize.",
    headline: "Biến quy trình vận hành phức tạp thành công cụ mà người dùng thực sự sử dụng.",
    intro:
      "Hơn 9 năm kinh nghiệm cải tiến quy trình, triển khai chuyển đổi số và quản lý dự án liên phòng ban. Tôi kết nối nhu cầu kinh doanh với giải pháp công nghệ, ưu tiên những giải pháp đơn giản nhưng tạo tác động rõ ràng đến hiệu suất làm việc.",
    summary: [
      "Tôi là quản lý Digital Transformation & Operations với hơn 9 năm kinh nghiệm cải tiến quy trình, triển khai các sáng kiến chuyển đổi số và quản lý dự án liên phòng ban.",
      "Trong công việc, tôi thường đóng vai trò kết nối giữa nhu cầu kinh doanh và giải pháp công nghệ: xác định vấn đề trong vận hành, đơn giản hóa quy trình, dùng dữ liệu để hỗ trợ ra quyết định và triển khai các công cụ giúp đội ngũ làm việc hiệu quả hơn.",
      "Phong cách của tôi thiên về tính thực tế, có cấu trúc và tập trung vào khả năng triển khai."
    ],
    email: "minhanh.demo@example.com",
    linkedin: "https://linkedin.com/in/minhanh-demo",
    // Số điện thoại dùng cho 3 cách liên hệ: Zalo, WhatsApp, Gọi.
    phone: "+84 907 797 767",
    zalo: "",     // để trống = dùng số phone ở trên; có thể nhập số Zalo riêng
    whatsapp: "", // để trống = dùng số phone ở trên; có thể nhập số WhatsApp riêng
    showPhone: true, // hiển thị số điện thoại trong mục Liên hệ
    photo: "assets/img/avatar.jpg",
    photoAlt: "Chân dung Nguyễn Minh Anh trong văn phòng",
    cv: "assets/CV_Nguyen_Minh_Anh.pdf"
  },

  // Số liệu lấy từ Achievements.txt và CV. Không thêm số liệu ngoài tài liệu gốc.
  heroStats: ["time", "hours", "adoption"],
  impactStats: [
    { id: "time", value: "3 → 1,5", unit: "ngày", label: "Thời gian xử lý yêu cầu mua hàng", context: "Digital Purchase Request Workflow" },
    { id: "hours", value: "12", unit: "giờ/tuần", label: "Giảm công tổng hợp báo cáo thủ công", context: "Operations Performance Dashboard" },
    { id: "adoption", value: "85", unit: "%", label: "Người dùng chủ động sử dụng công cụ mới", context: "Sau 2 tháng onboarding" },
    { id: "sop", value: "20+", unit: "quy trình", label: "Vận hành được chuẩn hóa", context: "Giữa các cửa hàng" },
    { id: "users", value: "180+", unit: "người dùng", label: "Dùng hệ thống task & request nội bộ", context: "Tại NovaRetail Group" },
    { id: "projects", value: "15+", unit: "dự án", label: "Cải tiến quy trình & chuyển đổi số", context: "Tham gia hoặc dẫn dắt" }
  ],

  principles: [
    {
      title: "Simplify before digitize",
      text: "Không số hóa một quy trình phức tạp khi chưa xem có thể đơn giản hóa nó trước hay không."
    },
    {
      title: "Data should support decisions",
      text: "Dashboard không nên chỉ có nhiều biểu đồ. Người dùng phải hiểu họ cần làm gì khi nhìn thấy dữ liệu."
    },
    {
      title: "Adoption is part of the project",
      text: "Dự án không kết thúc khi hệ thống go live. Người dùng thực sự dùng được công cụ mới là một phần của kết quả."
    }
  ],
  approach:
    "Khi bắt đầu một dự án, tôi không bắt đầu bằng công nghệ. Tôi quan sát cách mọi người đang làm việc, xác định vấn đề thật sự nằm ở đâu, rồi mới xem công nghệ có thể giúp như thế nào.",
  topics: [
    "Digital Transformation", "Future of Work", "Generative AI", "Process Improvement",
    "Business Operations", "Data Visualization", "Productivity", "Change Management"
  ],
  beyondWork:
    "Ngoài công việc, tôi thích đọc sách về business và technology, thử các công cụ productivity mới, tham gia workshop về innovation; cuối tuần thì đi hiking, chụp ảnh và tìm quán cà phê mới.",

  projects: [
    {
      id: "purchase-request",
      title: "Digital Purchase Request Workflow",
      period: "03/2024 đến 07/2024",
      role: "Project Lead",
      company: "NovaRetail Group",
      summary: "Số hóa quy trình yêu cầu mua hàng nội bộ, từ email và Excel sang một workflow tập trung có theo dõi trạng thái.",
      highlight: "3 ngày → 1,5 ngày xử lý trung bình",
      image: "assets/img/project-purchase-request.jpg",
      imageAlt: "Giao diện minh hoạ hệ thống Digital Purchase Request Workflow với các bước phê duyệt và bảng yêu cầu",
      context:
        "Quy trình yêu cầu mua hàng nội bộ trước đây dùng email, file Excel và nhiều bước xác nhận thủ công. Nhân viên gửi yêu cầu qua email, quản lý xác nhận, Finance kiểm tra ngân sách rồi Procurement xử lý tiếp. Thông tin nằm ở nhiều nơi nên người gửi khó biết yêu cầu đang ở bước nào.",
      problems: [
        "Thông tin yêu cầu không thống nhất",
        "Thiếu dữ liệu khi gửi request",
        "Nhiều email trao đổi qua lại",
        "Khó kiểm tra trạng thái request",
        "Không có dashboard tổng hợp",
        "Báo cáo phải làm thủ công"
      ],
      myRole: [
        "Phỏng vấn người dùng từ Operations, Finance và Procurement",
        "Mapping toàn bộ quy trình hiện tại và xác định các điểm nghẽn",
        "Thiết kế workflow mới, xây dựng requirement cho hệ thống",
        "Làm việc với vendor triển khai, điều phối UAT",
        "Xây dựng tài liệu hướng dẫn và theo dõi adoption sau launch"
      ],
      solution:
        "Một workflow tập trung: nhân viên tạo request, Manager phê duyệt, Finance kiểm tra ngân sách, Procurement xử lý, và người gửi theo dõi trạng thái ngay trên dashboard.",
      steps: ["Tạo request", "Manager phê duyệt", "Finance kiểm tra ngân sách", "Procurement xử lý", "Theo dõi trạng thái"],
      results: [
        "Giảm thời gian xử lý trung bình từ khoảng 3 ngày xuống 1,5 ngày",
        "Giảm khoảng 40% email trao đổi liên quan đến kiểm tra trạng thái",
        "Hơn 150 request mỗi tháng được quản lý trên hệ thống",
        "Quản lý có dashboard theo dõi request đang chờ duyệt",
        "Finance xuất báo cáo theo phòng ban và loại chi phí"
      ],
      skills: ["Process Mapping", "Requirement Gathering", "Stakeholder Management", "Project Management", "Workflow Design", "Change Management"]
    },
    {
      id: "ops-dashboard",
      title: "Operations Performance Dashboard",
      period: "08/2023 đến 12/2023",
      role: "Project Manager & Dashboard Designer",
      company: "NovaRetail Group",
      summary: "Một dashboard chung cho hơn 40 cửa hàng, thay cho nhiều file Excel riêng lẻ trong cuộc họp Operations hàng tuần.",
      highlight: "Giảm 12 giờ báo cáo thủ công mỗi tuần",
      image: "assets/img/project-dashboard.jpg",
      imageAlt: "Giao diện minh hoạ Operations Performance Dashboard với các chỉ số doanh thu, giao dịch và hiệu quả từng cửa hàng",
      context:
        "Ban quản lý nhận báo cáo từ hơn 40 cửa hàng dưới nhiều file khác nhau. Team Operations mất nhiều thời gian tổng hợp trước cuộc họp tuần.",
      problems: [
        "Dữ liệu phân tán",
        "Format của các cửa hàng không thống nhất",
        "Khó so sánh hiệu quả giữa các cửa hàng",
        "Quản lý nhận thông tin chậm",
        "Nhiều thời gian dành cho tạo báo cáo thay vì phân tích"
      ],
      myRole: [
        "Làm việc với Store Operations để thống nhất KPI",
        "Chuẩn hóa cấu trúc dữ liệu đầu vào",
        "Thiết kế wireframe và làm prototype dashboard",
        "Thu thập feedback từ người dùng và điều chỉnh",
        "Viết hướng dẫn sử dụng và training cho đội quản lý"
      ],
      solution:
        "Một dashboard chung để quản lý theo dõi hiệu suất hệ thống mà không phải đọc nhiều bảng Excel riêng. Dashboard gồm doanh thu, số giao dịch, giá trị giao dịch trung bình, chi phí vận hành, tỷ lệ thiếu hàng, phản hồi khách hàng, hiệu quả theo cửa hàng và xu hướng theo tuần/tháng.",
      steps: [],
      results: [
        "Giảm khoảng 12 giờ làm báo cáo thủ công mỗi tuần",
        "Giảm số lượng file báo cáo riêng cần theo dõi",
        "Ban quản lý phát hiện cửa hàng bất thường nhanh hơn",
        "Dashboard trở thành tài liệu chính trong cuộc họp Operations hàng tuần"
      ],
      skills: ["Google Sheets", "Looker Studio", "Excel", "Dashboard Design", "Data Visualization"]
    },
    {
      id: "sop",
      title: "Store Operations SOP Standardization",
      period: "02/2023 đến 06/2023",
      role: "Process Improvement Lead",
      company: "NovaRetail Group",
      summary: "Chuẩn hóa hơn 20 quy trình cửa hàng và tạo thư viện SOP tập trung cho toàn hệ thống.",
      highlight: "20+ SOP được chuẩn hóa",
      image: "assets/img/project-sop.jpg",
      imageAlt: "Tài liệu minh hoạ SOP Standardization với sơ đồ quy trình cửa hàng và mẫu SOP Opening Store",
      context:
        "Các cửa hàng thực hiện một số quy trình theo những cách khác nhau dù thuộc cùng một hệ thống.",
      problems: [
        "Cùng một quy trình nhưng mỗi cửa hàng làm một kiểu",
        "Có các bước trùng lặp hoặc không cần thiết",
        "Thiếu nguồn tài liệu chung để đào tạo nhân viên mới"
      ],
      myRole: [
        "Quan sát hoạt động tại cửa hàng, phỏng vấn Store Manager",
        "Mapping quy trình hiện tại, xác định bước trùng hoặc không cần thiết",
        "Thiết kế quy trình chuẩn, pilot tại 5 cửa hàng",
        "Thu thập feedback, điều chỉnh, rồi rollout toàn hệ thống"
      ],
      solution:
        "Review hơn 20 quy trình gồm opening/closing store, inventory checking, product receiving, incident reporting, shift handover, daily sales reporting và customer complaint handling. Mỗi quy trình có bản chuẩn và checklist đơn giản dùng trong ca làm việc.",
      steps: ["Quan sát", "Mapping", "Thiết kế chuẩn", "Pilot 5 cửa hàng", "Feedback", "Rollout"],
      results: [
        "Chuẩn hóa hơn 20 SOP",
        "Giảm sự khác biệt trong cách xử lý giữa các cửa hàng",
        "Tạo thư viện SOP tập trung",
        "Có checklist đơn giản để nhân viên dùng trong ca",
        "Store Manager có một nguồn tài liệu chung khi đào tạo nhân viên mới"
      ],
      skills: ["Process Improvement", "SOP Development", "Root Cause Analysis", "Change Management"]
    },
    {
      id: "ai-pilot",
      title: "Internal AI Productivity Pilot",
      period: "01/2025 đến 04/2025",
      role: "Project Lead",
      company: "NovaRetail Group",
      summary: "Thử nghiệm Generative AI với 25 nhân viên từ 5 phòng ban để giảm thời gian cho các công việc lặp lại.",
      highlight: "12 use case được xác định để mở rộng",
      image: "assets/img/project-ai-pilot.jpg",
      imageAlt: "Minh Anh trình bày chương trình Internal AI Productivity Pilot trước nhóm nhân viên",
      context:
        "Mục tiêu là thử nghiệm Generative AI để giảm thời gian xử lý các công việc lặp lại của nhân viên văn phòng. Nhóm tham gia gồm 25 nhân viên từ Marketing, HR, Operations, Finance và Business Development.",
      problems: [
        "Chưa rõ tác vụ nào phù hợp với AI, tác vụ nào không",
        "Nguy cơ đưa dữ liệu nhạy cảm vào công cụ AI công cộng",
        "Cần chứng minh giá trị trước khi triển khai rộng"
      ],
      myRole: [
        "Thu thập use case, phân loại nhiệm vụ phù hợp và không phù hợp với AI",
        "Thiết kế hướng dẫn sử dụng, tổ chức workshop",
        "Theo dõi thử nghiệm và thu thập feedback",
        "Xây dựng bộ guideline sử dụng AI có trách nhiệm"
      ],
      solution:
        "Thử nghiệm các use case: tóm tắt báo cáo, viết email, chuẩn bị meeting notes, phân tích phản hồi khách hàng, chuẩn hóa nội dung báo cáo, research ban đầu, tạo draft SOP và xử lý dữ liệu đơn giản.",
      steps: [],
      results: [
        "18/25 người tham gia tiếp tục dùng AI ít nhất vài lần mỗi tuần",
        "Một số tác vụ soạn thảo và tổng hợp giảm đáng kể thời gian thực hiện",
        "Xác định 12 use case phù hợp để triển khai rộng hơn",
        "Tạo bộ AI Usage Guidelines cho nhân viên",
        "Xác định các loại dữ liệu không nên đưa vào công cụ AI công cộng"
      ],
      skills: ["AI Adoption", "Change Management", "Workshop Facilitation", "Process Design", "Responsible AI"]
    }
  ],

  experience: [
    {
      company: "NovaRetail Group",
      type: "Công ty bán lẻ (giả lập)",
      title: "Digital Transformation & Operations Manager",
      period: "01/2022 đến hiện tại",
      intro: "Phụ trách các sáng kiến cải tiến vận hành và chuyển đổi số cho hệ thống bán lẻ hơn 40 cửa hàng.",
      highlights: [
        "Dẫn dắt số hóa quy trình yêu cầu mua hàng: từ khoảng 3 ngày xuống 1,5 ngày",
        "Xây dựng hệ thống dashboard quản trị, giảm khoảng 12 giờ báo cáo thủ công mỗi tuần",
        "Chuẩn hóa hơn 20 quy trình vận hành giữa các cửa hàng",
        "Tham gia triển khai hệ thống task và request nội bộ cho hơn 180 người dùng",
        "Thiết kế chương trình onboarding công cụ mới, đạt khoảng 85% người dùng chủ động sử dụng sau 2 tháng",
        "Phối hợp Finance và Operations tự động hóa một phần báo cáo chi phí hàng tháng"
      ],
      scope: "Phối hợp Operations, Finance, HR, Marketing và IT; quản lý roadmap chuyển đổi số; làm việc với vendor công nghệ; xây dựng SOP và hướng dẫn vận hành."
    },
    {
      company: "BrightBite Foods",
      type: "Công ty F&B (giả lập)",
      title: "Senior Business Operations Specialist",
      period: "06/2018 đến 12/2021",
      intro: "Phân tích hoạt động kinh doanh, báo cáo quản trị và các dự án cải tiến quy trình cho chuỗi F&B.",
      highlights: [
        "Dashboard tổng hợp dữ liệu từ 25 cửa hàng, giảm khoảng 60% thời gian tạo báo cáo tháng",
        "Chuẩn hóa hệ thống báo cáo từ hơn 10 file riêng lẻ thành một bộ báo cáo thống nhất",
        "Phân tích dữ liệu bán hàng, đề xuất điều chỉnh lịch nhân sự cho nhóm cửa hàng có lưu lượng khách không ổn định",
        "Thiết kế bộ KPI dashboard cho đội Store Operations",
        "Tham gia dự án kiểm kê mới, giảm các bước nhập liệu thủ công"
      ],
      scope: ""
    },
    {
      company: "UrbanLink Services",
      type: "Công ty dịch vụ (giả lập)",
      title: "Operations Executive",
      period: "07/2015 đến 05/2018",
      intro: "Quản lý dữ liệu vận hành, báo cáo tuần và phối hợp giữa Sales và Operations.",
      highlights: [
        "Thiết kế tracker yêu cầu khách hàng, kiểm soát tốt hơn các yêu cầu quá hạn",
        "Chuẩn hóa template báo cáo tuần",
        "Xây dựng checklist bàn giao giữa Sales và Operations",
        "Tham gia dự án chuyển biểu mẫu giấy sang biểu mẫu điện tử"
      ],
      scope: ""
    }
  ],

  skills: [
    { group: "Digital Transformation", items: ["Process Digitalization", "Digital Transformation Roadmap", "Workflow Design", "Technology Adoption", "Change Management"] },
    { group: "Operations", items: ["Process Improvement", "SOP Development", "Operations Management", "Root Cause Analysis", "Continuous Improvement"] },
    { group: "Project Management", items: ["Project Planning", "Stakeholder Management", "Requirement Gathering", "Risk Management", "Vendor Coordination"] },
    { group: "Data & Reporting", items: ["Excel", "Google Sheets", "Power BI", "Looker Studio", "Dashboard Design", "Data Visualization", "Management Reporting"] },
    { group: "Automation & AI", items: ["Workflow Automation", "Generative AI", "Claude", "ChatGPT", "Gemini", "No code / Low code", "Process Automation"] },
    { group: "Collaboration", items: ["Cross functional Collaboration", "Workshop Facilitation", "Stakeholder Communication", "Training & User Adoption", "Executive Presentation"] }
  ],

  testimonials: [
    {
      quote: "Minh Anh có khả năng rất tốt trong việc biến một vấn đề vận hành phức tạp thành một quy trình rõ ràng mà cả business và IT đều có thể hiểu. Trong các dự án cùng làm, Minh Anh luôn giữ được sự cân bằng giữa yêu cầu của người dùng và tính khả thi khi triển khai.",
      name: "Trần Hoàng Nam",
      title: "Head of Operations",
      company: "NovaRetail Group"
    },
    {
      quote: "Điểm mạnh nhất của Minh Anh không chỉ nằm ở việc triển khai công cụ mới mà ở việc giúp người dùng hiểu tại sao họ cần thay đổi cách làm việc. Điều này giúp các dự án có tỷ lệ adoption tốt hơn.",
      name: "Phạm Thu Hà",
      title: "HR & Transformation Director",
      company: "NovaRetail Group"
    },
    {
      quote: "Minh Anh rất mạnh ở việc tổ chức thông tin và chuyển dữ liệu thành những dashboard mà quản lý thực sự sử dụng để ra quyết định.",
      name: "Nguyễn Thanh Long",
      title: "Former Operations Director",
      company: "BrightBite Foods"
    }
  ],

  education: {
    degree: "Bachelor of Business Administration",
    school: "University of Economics Ho Chi Minh City (dữ liệu giả lập)",
    period: "2011 đến 2015",
    major: "Business Administration",
    courses: ["Operations Management", "Business Analytics", "Project Management", "Management Information Systems"]
  },
  certifications: [
    { name: "Google Data Analytics Certificate", year: "2023" },
    { name: "Project Management Foundations", year: "2022" },
    { name: "Lean Six Sigma Yellow Belt", year: "2021" },
    { name: "Microsoft Power BI Data Analyst Fundamentals", year: "2020" }
  ],

  opportunities: [
    "Digital Transformation",
    "Business Operations",
    "Transformation Project Management",
    "Process Improvement",
    "AI Adoption",
    "Internal Productivity Tools"
  ],
  contactNote:
    "Tôi sẵn sàng trao đổi về các dự án hoặc cơ hội hợp tác liên quan đến chuyển đổi số, tối ưu vận hành và ứng dụng AI trong công việc.",

  footerNote: "Nội dung trên trang là dữ liệu demo phục vụ bài thực hành: tên công ty, trường học, người nhận xét và thông tin liên hệ đều mang tính giả lập. Ảnh dự án là hình minh hoạ."
};
