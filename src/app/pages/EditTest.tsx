import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router';
import { ChevronLeft, Upload, X, Plus } from 'lucide-react';

export function EditTest() {
  const navigate = useNavigate();
  const { testId } = useParams();
  const [testName, setTestName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [sampleType, setSampleType] = useState('');
  const [reportTime, setReportTime] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [preparation, setPreparation] = useState('');
  const [homeCollection, setHomeCollection] = useState(true);
  const [parameters, setParameters] = useState<string[]>(['']);
  const [image, setImage] = useState<File | null>(null);

  const addParameter = () => {
    setParameters([...parameters, '']);
  };

  const updateParameter = (index: number, value: string) => {
    const newParameters = [...parameters];
    newParameters[index] = value;
    setParameters(newParameters);
  };

  const removeParameter = (index: number) => {
    setParameters(parameters.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Test data:', {
      testName,
      category,
      description,
      sampleType,
      reportTime,
      price,
      originalPrice,
      preparation,
      homeCollection,
      parameters: parameters.filter((p) => p.trim() !== ''),
      image,
    });
    // Navigate back to admin dashboard
    navigate('/admin/tests');
  };

  return (
    <div style={{ backgroundColor: 'var(--soft-background)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="py-6"
        style={{
          backgroundColor: 'var(--dark-navy)',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/admin"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <ChevronLeft size={20} />
              Back to Dashboard
            </Link>
          </div>
          <h1
            style={{
              fontSize: '22px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Edit Test
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Basic Information
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="testName"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Test Name *
                </label>
                <input
                  id="testName"
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="e.g., Complete Blood Count (CBC)"
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="category"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Blood Test">Blood Test</option>
                    <option value="Hormone Test">Hormone Test</option>
                    <option value="Heart Health">Heart Health</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Vitamin">Vitamin</option>
                    <option value="Organ Health">Organ Health</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="sampleType"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Sample Type *
                  </label>
                  <input
                    id="sampleType"
                    type="text"
                    value={sampleType}
                    onChange={(e) => setSampleType(e.target.value)}
                    placeholder="e.g., Blood, Urine"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the test"
                  rows={4}
                  className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing & Details Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Pricing & Details
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="price"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Price (₹) *
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="299"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="originalPrice"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Original Price (₹)
                  </label>
                  <input
                    id="originalPrice"
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="499"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reportTime"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Report Time *
                </label>
                <input
                  id="reportTime"
                  type="text"
                  value={reportTime}
                  onChange={(e) => setReportTime(e.target.value)}
                  placeholder="e.g., 6 hours, 24 hours"
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="preparation"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Preparation Instructions
                </label>
                <textarea
                  id="preparation"
                  value={preparation}
                  onChange={(e) => setPreparation(e.target.value)}
                  placeholder="e.g., No fasting required. Sample can be collected at any time."
                  rows={3}
                  className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="homeCollection"
                  checked={homeCollection}
                  onChange={(e) => setHomeCollection(e.target.checked)}
                  className="w-5 h-5 rounded"
                  style={{
                    accentColor: 'var(--primary-blue)',
                  }}
                />
                <label
                  htmlFor="homeCollection"
                  className="cursor-pointer"
                  style={{
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                    fontWeight: '500',
                  }}
                >
                  Home Collection Available
                </label>
              </div>
            </div>
          </div>

          {/* Parameters Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Parameters
              </h2>
              <button
                type="button"
                onClick={addParameter}
                className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                <Plus size={16} />
                Add Parameter
              </button>
            </div>

            <div className="space-y-3">
              {parameters.map((param, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={param}
                    onChange={(e) => updateParameter(index, e.target.value)}
                    placeholder={`Parameter ${index + 1}`}
                    className="flex-1 px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                  />
                  {parameters.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParameter(index)}
                      className="p-2 transition-colors duration-200 hover:bg-red-50"
                      style={{
                        color: 'var(--error-red)',
                        borderRadius: '8px',
                      }}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Upload Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Test Image
            </h2>

            <div
              className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 hover:border-primary-blue hover:bg-soft-background"
              style={{
                borderColor: image ? 'var(--teal-accent)' : 'var(--soft-blue-white)',
                backgroundColor: image ? 'var(--badge-bg)' : 'var(--soft-background)',
              }}
              onClick={() => document.getElementById('imageUpload')?.click()}
            >
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload
                size={48}
                style={{
                  color: 'var(--soft-blue-white)',
                  margin: '0 auto 16px',
                }}
              />
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {image ? image.name : 'Click to upload or drag and drop'}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}
              >
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/tests')}
              className="flex-1 transition-all duration-200 hover:bg-gray-100"
              style={{
                height: '52px',
                backgroundColor: 'white',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 transition-all duration-200 hover:opacity-90"
              style={{
                height: '52px',
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Update Test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
